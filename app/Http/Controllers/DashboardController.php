<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Cutter;
use App\Models\Service;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $cutters = Cutter::all()->count();
        $services = Service::all()->count();

        $bookingsPerMonth = Booking::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->map(function ($item) {
                return [
                    'month' => \Carbon\Carbon::create()->month($item->month)->format('M'),
                    'total' => $item->total,
                ];
            });


        return Inertia::render('Dashboard', [
            'cutters' => $cutters,
            'services' => $services,
            'bookings' => $bookingsPerMonth,
        ]);
    }
}
