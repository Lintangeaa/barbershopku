<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Booking;
use Illuminate\Http\Request;
use App\Models\PaymentProof;

class CustomerController extends Controller
{
    public function getPayment($id)
    {
        $booking = Booking::with(['service', 'schedule'])->find($id);

        if (!$booking) {
            abort(404, 'Booking tidak ditemukan');
        }

        return inertia('Payment', [
            'booking' => $booking
        ]);
    }

    public function submitProof(Request $request, $bookingId)
    {
        try{
            $request->validate([
                'proof_image' => 'required|image', // Ensure it's an image
            ]);
    
            // Get the image file from the request
            $image = $request->file('proof_image');
    
            // Store the image in the public directory
            $imagePath = $image->store('payment_proofs', 'public'); // Store the image in "storage/app/public/payment_proofs" folder
    
            // Store the image path in the database
            $paymentProof = PaymentProof::create([
                'booking_id' => $bookingId,
                'proof_image' => $imagePath,
            ]);
    
            session()->flash('success', 'Payment proof uploaded successfully');
    
        }catch(\Exception $e){
            session()->flash('error', 'Terjadi kesalahan saat menyimpan booking.');
        
            return back();
        }
    }
}
