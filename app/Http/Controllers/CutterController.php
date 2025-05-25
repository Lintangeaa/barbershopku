<?php

namespace App\Http\Controllers;

use App\Models\Cutter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CutterController extends Controller
{
    /**
     * Tampilkan daftar cutter.
     */
    public function index()
    {
        $cutters = Cutter::all();
        return Inertia::render('Admin/Cutters/Index', [
            'cutters' => $cutters
        ]);
    }

    /**
     * Tampilkan form tambah cutter.
     */
    public function create()
    {
        return Inertia::render('Admin/Cutters/Create');
    }

    /**
     * Simpan cutter baru ke database.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->only('name');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('cutters', 'public');
        }

        Cutter::create($data);

        return redirect()->route('cutters.index')->with('success', 'Cutter berhasil ditambahkan.');
    }

    /**
     * Tampilkan form edit cutter.
     */
    public function edit(Cutter $cutter)
    {
        return Inertia::render('Admin/Cutters/Edit', [
            'cutter' => $cutter
        ]);
    }

    /**
     * Perbarui cutter di database.
     */
    public function update(Request $request, Cutter $cutter)
    {
        // Log semua data yang diterima
        Log::info('Update Cutter Request', [
            'request_data' => $request->all(),
            'has_file' => $request->hasFile('image')
        ]);

        $request->validate([
            'name' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->only('name');

        // Proses upload gambar
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Log detail file
            Log::info('Uploaded File Details', [
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getMimeType(),
                'size' => $file->getSize()
            ]);

            Storage::disk('public')->delete($cutter->image);
            $data['image'] = $request->file('image')->store('cutters', 'public');
        }

        $cutter->update($data);

        Log::info('Cutter Updated', [
            'id' => $cutter->id,
            'name' => $cutter->name,
            'image' => $cutter->image
        ]);

        return redirect()->route('cutters.index')->with('success', 'Cutter berhasil di update.');
    }

    /**
     * Hapus cutter dari database.
     */
    public function destroy(Cutter $cutter)
    {
        if ($cutter->image) {
            Storage::disk('public')->delete($cutter->image);
        }
        $cutter->delete();

        return redirect()->route('cutters.index')->with('success', 'Cutter berhasil dihapus.');
    }
}
