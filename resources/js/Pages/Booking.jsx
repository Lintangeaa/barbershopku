import { useState } from "react";
import { Head, useForm } from "@inertiajs/react"; // Inertia.js form handling
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import Swal from "sweetalert2";

export default function CreateBooking({
    services,
    schedules,
    cutters,
    bookings,
}) {
    const { data, setData, post, processing, errors } = useForm({
        customer_name: "",
        email: "",
        service_id: "",
        schedule_id: "",
        cutter_id: "",
        date: "",
    });

    const [scheduleAvailability, setScheduleAvailability] = useState([]);

    // Update jadwal otomatis ketika tanggal dipilih
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setData("date", selectedDate);

        // Filter booking berdasarkan tanggal yang dipilih
        const filteredBookings = bookings.filter((booking) => {
            return booking.date === selectedDate;
        });

        // Update jadwal dengan status tersedia/tidak
        const updatedSchedules = schedules.map((schedule) => ({
            id: schedule.id,
            time_range: schedule.time_range,
            is_available: !filteredBookings.some(
                (booking) => booking.schedule_id === schedule.id
            ),
        }));

        setScheduleAvailability(updatedSchedules);
    };

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
                        <label className="block text-sm font-medium text-gray-700">
                            Nama Pelanggan
                        </label>
                        <input
                            type="text"
                            name="customer_name"
                            value={data.customer_name}
                            onChange={(e) =>
                                setData("customer_name", e.target.value)
                            }
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        {errors.customer_name && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.customer_name}
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            reaquired
                        />
                        {errors.email && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    {/* Pilih Tanggal */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Tanggal Booking
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={data.date}
                            onChange={handleDateChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        {errors.date && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.date}
                            </div>
                        )}
                    </div>

                    {/* Pilih Jadwal (Muncul Setelah Tanggal Dipilih) */}
                    {scheduleAvailability.length > 0 && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Pilih Jadwal
                            </label>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {scheduleAvailability.map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        onClick={() =>
                                            schedule.is_available &&
                                            setData("schedule_id", schedule.id)
                                        }
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
                                            ${
                                                schedule.is_available
                                                    ? "bg-brown text-white hover:bg-neutral-600"
                                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }
                                            ${
                                                data.schedule_id === schedule.id
                                                    ? "ring-2 ring-neutral-700 border-2 border-neutral-700"
                                                    : ""
                                            }
                                        `}
                                    >
                                        {schedule.time_range}
                                    </div>
                                ))}
                            </div>
                            {errors.schedule_id && (
                                <div className="text-red-600 text-sm mt-1">
                                    {errors.schedule_id}
                                </div>
                            )}
                            <div className="mt-4 flex gap-4 text-sm items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-brown rounded"></div>
                                    <span>Tersedia</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                    <span>Sudah Dibooking</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-brown ring-2 ring-neutral-700 border-2 border-neutral-700 rounded"></div>
                                    <span>Terpilih</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Pilih Layanan
                        </label>
                        <select
                            name="service_id"
                            value={data.service_id}
                            onChange={(e) =>
                                setData("service_id", e.target.value)
                            }
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Pilih Cutter
                        </label>
                        <select
                            name="cutter_id"
                            value={data.cutter_id}
                            onChange={(e) =>
                                setData("cutter_id", e.target.value)
                            }
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required
                        >
                            <option value="">Pilih Cutter</option>
                            {cutters.map((cutter) => (
                                <option key={cutter.id} value={cutter.id}>
                                    {cutter.name}
                                </option>
                            ))}
                        </select>
                        {errors.cutter_id && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.cutter_id}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <PrimaryButton
                            className="bg-brown"
                            type="submit"
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
