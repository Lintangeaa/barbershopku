import { useState } from "react";
import { useForm } from "@inertiajs/react"; // Inertia.js form handling
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateBooking({ services, schedules }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        service_id: "",
        schedule_id: "",
        date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("booking.store"));
    };

    return (
        <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-3xl font-semibold text-center mb-8">
                Booking Layanan
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md space-y-6"
            >
                {/* Nama Pelanggan */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nama Pelanggan
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.name && (
                        <div className="text-red-600 text-sm mt-1">
                            {errors.name}
                        </div>
                    )}
                </div>

                {/* Pilih Layanan */}
                <div>
                    <label
                        htmlFor="service_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pilih Layanan
                    </label>
                    <select
                        id="service_id"
                        name="service_id"
                        value={data.service_id}
                        onChange={(e) => setData("service_id", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Pilih Layanan</option>
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name} - Rp {service.price}
                            </option>
                        ))}
                    </select>
                    {errors.service_id && (
                        <div className="text-red-600 text-sm mt-1">
                            {errors.service_id}
                        </div>
                    )}
                </div>

                {/* Pilih Jadwal */}
                <div>
                    <label
                        htmlFor="schedule_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pilih Jadwal
                    </label>
                    <select
                        id="schedule_id"
                        name="schedule_id"
                        value={data.schedule_id}
                        onChange={(e) => setData("schedule_id", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Pilih Jadwal</option>
                        {schedules.map((schedule) => (
                            <option key={schedule.id} value={schedule.id}>
                                {schedule.time_range}
                            </option>
                        ))}
                    </select>
                    {errors.schedule_id && (
                        <div className="text-red-600 text-sm mt-1">
                            {errors.schedule_id}
                        </div>
                    )}
                </div>

                {/* Tanggal Booking */}
                <div>
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Tanggal Booking
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.date && (
                        <div className="text-red-600 text-sm mt-1">
                            {errors.date}
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <PrimaryButton
                        type="submit"
                        className="w-full bg-brown"
                        disabled={processing}
                    >
                        {processing ? "Memproses..." : "Buat Booking"}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
