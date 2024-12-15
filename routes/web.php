<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustomerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/service', function () {
    return Inertia::render('Service');
})->name('service');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/booking/create', [BookingController::class, 'create'])->name('booking.create');
Route::post('/booking/store', [BookingController::class, 'store'])->name('booking.store');

Route::get('/payment/{id}', [CustomerController::class, 'getPayment'])->name('payment.get');
Route::post('/payment/submit/{id}', [CustomerController::class, 'submitProof'])->name('payment.submit');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/booking', [BookingController::class, 'index'])->name('booking.index');
    Route::patch('/payment/confirm/{id}', [BookingController::class, 'confirmPayment'])->name('payment.confirm');
    Route::delete('/booking/{id}', [BookingController::class, 'destroy'])->name('booking.destroy');

});

require __DIR__ . '/auth.php';
