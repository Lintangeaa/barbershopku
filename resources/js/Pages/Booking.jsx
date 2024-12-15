import { useState } from "react";
import { Head, useForm } from "@inertiajs/react"; // Inertia.js form handling
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import Swal from "sweetalert2";

export default function CreateBooking({ services, schedules, bookings }) {
    const { data, setData, post, processing, errors } = useForm({
        customer_name: "",
        email: "",
        service_id: "",
        schedule_id: "",
        date: "",
    });
    console.log(data.date);
    console.log(bookings, schedules);

    const filteredBookings = bookings.filter((booking) => {
        const bookingDate = new Date(booking.date);
        const startDate = new Date(data.date);
        return (
            bookingDate.getFullYear() === startDate.getFullYear() &&
            bookingDate.getMonth() === startDate.getMonth() &&
            bookingDate.getDate() === startDate.getDate()
        );
    });

    const unusedSchedules = schedules.filter((schedule) => {
        return !filteredBookings.some(
            (booking) => booking.schedule_id === schedule.id
        );
    });

    console.log(unusedSchedules);

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(route("booking.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Booking Berhasil!",
                    text: "Silakan cek email Anda untuk detail lebih lanjut.",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    // Refresh halaman setelah menutup Swal
                    window.location.reload();
                });
            },
            onError: (errors) => {
                Swal.fire({
                    title: "Terjadi Kesalahan!",
                    text: "Silakan periksa input Anda atau coba lagi nanti.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Booking" />
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
                            id="customer_name"
                            name="customer_name"
                            value={data.customer_name}
                            onChange={(e) =>
                                setData("customer_name", e.target.value)
                            }
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.customer_name && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.customer_name}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.email && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>

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
                            min={new Date().toISOString().split("T")[0]}
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.date && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.date}
                            </div>
                        )}
                    </div>

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
                            onChange={(e) =>
                                setData("service_id", e.target.value)
                            }
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
                            onChange={(e) =>
                                setData("schedule_id", e.target.value)
                            }
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Pilih Jadwal</option>
                            {unusedSchedules.map((schedule) => (
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

                    <div className="flex justify-center">
                        <PrimaryButton
                            type="submit"
                            className="text-center bg-brown"
                            disabled={processing}
                        >
                            {processing ? "Memproses..." : "Buat Booking"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
