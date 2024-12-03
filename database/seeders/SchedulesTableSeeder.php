<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Illuminate\Database\Seeder;

class SchedulesTableSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan beberapa jadwal ke dalam tabel schedules
        Schedule::create([
            'time_range' => '09:00 - 10:00',
            'status' => false, // Belum terisi
        ]);

        Schedule::create([
            'time_range' => '10:00 - 11:00',
            'status' => false,
        ]);

        Schedule::create([
            'time_range' => '11:00 - 12:00',
            'status' => false,
        ]);

        Schedule::create([
            'time_range' => '12:00 - 13:00',
            'status' => false,
        ]);

        Schedule::create([
            'time_range' => '13:00 - 14:00',
            'status' => false,
        ]);

        Schedule::create([
            'time_range' => '14:00 - 15:00',
            'status' => false,
        ]);
    }
}
