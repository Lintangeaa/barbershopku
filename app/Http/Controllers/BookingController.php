<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Inertia\Inertia;
use App\Models\Schedule;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use App\Models\PaymentProof;

class BookingController extends Controller
{
    public function index()
    {
        // Mengambil data bookings dengan relasi ke service, schedule, dan paymentProof
        $bookings = Booking::with(['service', 'schedule', 'paymentProof'])->orderBy('date', 'asc')->get(); 
    
        // Kirimkan data ke halaman React menggunakan Inertia
        return Inertia::render('Admin/Booking/Index', [
            'bookings' => $bookings, // Hanya mengirim data bookings
        ]);
    }
    

    public function create()
    {
        $services = Service::all(); // Ambil semua layanan
        $schedules = Schedule::all();
        $bookings = Booking::all();

        return Inertia::render('Booking', [
            'bookings' => $bookings,
            'services' => $services,
            'schedules' => $schedules,
        ]);
    }

    public function store(Request $request)
    {
        try {
            // Validasi input
            $request->validate([
                'customer_name' => 'required|string|max:255',
                'date' => 'required|date',
                'email' => 'required|email|max:255',
                'service_id' => 'required|exists:services,id',
                'schedule_id' => 'required|exists:schedules,id',
            ]);
        
            // Create booking
            $booking = Booking::create([
                'customer_name' => $request->customer_name,
                'date' => $request->date,
                'email' => $request->email,
                'service_id' => $request->service_id,
                'schedule_id' => $request->schedule_id,
                'status' => 1, // Default status "Pending"
            ]);
        
            // Update schedule status
            $schedule = Schedule::find($request->schedule_id);
            $service = Service::find($request->service_id);
        
            if ($schedule && $service) {
                \Log::info('Schedule Found:', ['schedule_id' => $schedule->id, 'status' => $schedule->status]);
        
                $schedule->status = true;
                $schedule->save();
            } else {
                \Log::warning('Schedule Not Found:', ['schedule_id' => $request->schedule_id]);
            }
        
            // Generate payment link
            $paymentLink = "https://barbershopku.my.id/payment/{$booking->id}";
        
            // Send email
            $client = new Client();
            $response = $client->post('https://siupik-api.my.id/api/service/sendemail', [
                'json' => [
                    'email' => 'devsoulcode0@gmail.com',
                    'password' => 'ulxe usvm imlw ijfm',
                    'to' => $request->email,
                    'subject' => 'BOOKING BARBERSHOP',
                    'text' => "Halo {$request->customer_name},\n\nBooking Anda telah diterima. Terima kasih telah memilih layanan {$service->name}. Pada tanggal {$request->date} jam {$schedule->time_range}.\n\nSilakan lakukan pembayaran melalui tautan berikut:\n{$paymentLink}\n\nMohon lakukan pembayaran dalam waktu 2 jam. Jika pembayaran tidak diterima dalam waktu tersebut, booking Anda akan dibatalkan secara otomatis."
                ]
            ]);
        
            // Log the response
            \Log::info('Email API Response:', ['response' => $response->getBody()->getContents()]);
        
            // Set success flash message
            session()->flash('success', 'Booking berhasil!');
        } catch (\Exception $e) {
            // Log error
            \Log::error('Booking Error: ' . $e->getMessage());
            session()->flash('error', 'Terjadi kesalahan saat menyimpan booking.');
        
            return back();
        }        
    }

    public function confirmPayment($bookingId)
    {
        $booking = Booking::with(['service', 'schedule'])->find($bookingId);

        $booking->status = 2;
        $booking->save();

        $customerName = $booking->customer_name;
        $customerEmail = $booking->email;
        $serviceName = $booking->service->name;
        $bookingDate = $booking->date;
        $scheduleTime = $booking->schedule->time_range;
        $bookingId = $booking->id;

        $emailBody = "Halo {$customerName},\n\n" .
            "Pembayaran Anda telah dikonfirmasi! Berikut adalah detail booking Anda:\n\n" .
            "Nomor Antrian: {$bookingId}\n" .
            "Tanggal: {$bookingDate}\n" .
            "Jadwal: {$scheduleTime}\n" .
            "Layanan: {$serviceName}\n\n" .
            "Terima kasih telah memilih layanan kami. Sampai jumpa di barbershop!";

        $client = new Client();
        $response = $client->post('https://siupik-api.my.id/api/service/sendemail', [
            'json' => [
                'email' => 'devsoulcode0@gmail.com',
                'password' => 'ulxe usvm imlw ijfm',
                'to' => $customerEmail,
                'subject' => 'Konfirmasi Pembayaran - Booking Barbershop',
                'text' => $emailBody
            ]
        ]);
    }

    public function destroy($bookingId)
    {
        $booking = Booking::findOrFail($bookingId);
        // Hapus data
        $booking->delete();

        return redirect()->route('booking.index');
    }
}
