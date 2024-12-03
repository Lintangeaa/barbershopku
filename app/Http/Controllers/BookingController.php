<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Inertia\Inertia;
use App\Models\Schedule;
use App\Models\Service;
use Illuminate\Http\Request;  // Pastikan mengimpor Request yang benar

class BookingController extends Controller
{
    public function index()
    {
        // Mengambil data services dan schedules dari database
        $services = Service::all();
        $schedules = Schedule::where('status', false)->get(); // Menampilkan jadwal yang tersedia (status = false)

        // Mengirimkan data ke halaman React menggunakan Inertia
        return Inertia::render('Admin/Booking/Index', [
            'services' => $services,
            'schedules' => $schedules,
        ]);
    }

    public function create()
    {
        $services = Service::all(); // Ambil semua layanan
        $schedules = Schedule::where('status', false)->get(); // Ambil jadwal yang belum terisi

        return Inertia::render('Booking', [
            'services' => $services,
            'schedules' => $schedules,
        ]);
    }

    // Fungsionalitas untuk menyimpan booking
    public function store(Request $request)
    {
        // Validasi input menggunakan dependency injection Request
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'date' => 'required|date',
            'service_id' => 'required|exists:services,id',
            'schedule_id' => 'required|exists:schedules,id',
        ]);

        // Menyimpan booking
        Booking::create([
            'customer_name' => $request->customer_name,
            'date' => $request->date,
            'service_id' => $request->service_id,
            'schedule_id' => $request->schedule_id,
            'status' => 1, // Default status "Pending"
        ]);

        // Update status schedule menjadi booked (true)
        $schedule = Schedule::find($request->schedule_id);
        $schedule->status = true;
        $schedule->save();

        return redirect()->route('admin.booking.index')->with('success', 'Booking berhasil!');
    }
}
