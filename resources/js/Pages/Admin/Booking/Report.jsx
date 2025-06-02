import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { RiArrowLeftLine, RiDownloadLine } from "react-icons/ri";

const BookingReport = ({
    bookings,
    totalBookings,
    totalRevenue,
    startDate,
    endDate,
}) => {
    const [filters, setFilters] = useState({
        start_date: startDate || "",
        end_date: endDate || "",
    });

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleFilter = () => {
        router.get(route("booking.report"), filters);
    };

    const handleDownloadPDF = () => {
        // Create URL with current filters
        const params = new URLSearchParams();
        if (filters.start_date) params.append("start_date", filters.start_date);
        if (filters.end_date) params.append("end_date", filters.end_date);

        const url = route("booking.download-pdf") + "?" + params.toString();
        window.open(url, "_blank");
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(amount);
    };

    const getStatusText = (status) => {
        switch (status) {
            case 1:
                return "Menunggu Pembayaran";
            case 2:
                return "Lunas";
            case 3:
                return "Dibatalkan";
            default:
                return "Unknown";
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 1:
                return "bg-yellow-100 text-yellow-800";
            case 2:
                return "bg-green-100 text-green-800";
            case 3:
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Laporan Booking" />

            <div className="px-8 py-10">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <Link
                                href={route("booking.index")}
                                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                            >
                                <RiArrowLeftLine size={20} className="mr-2" />{" "}
                                Kembali
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Laporan Booking
                            </h1>
                        </div>
                        <button
                            onClick={handleDownloadPDF}
                            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            <RiDownloadLine size={20} className="mr-2" />
                            Download PDF
                        </button>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Filter Laporan
                        </h3>
                        <div className="flex items-end space-x-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tanggal Mulai
                                </label>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={filters.start_date}
                                    onChange={handleFilterChange}
                                    className="px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tanggal Selesai
                                </label>
                                <input
                                    type="date"
                                    name="end_date"
                                    value={filters.end_date}
                                    onChange={handleFilterChange}
                                    className="px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <button
                                onClick={handleFilter}
                                className="px-4 py-2 bg-brown text-white rounded-md hover:bg-brown-dark"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Report Content */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    {/* Report Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            LAPORAN BOOKING BARBERSHOP
                        </h1>
                        {startDate && endDate && (
                            <p className="text-gray-600">
                                Periode:{" "}
                                {new Date(startDate).toLocaleDateString(
                                    "id-ID"
                                )}{" "}
                                -{" "}
                                {new Date(endDate).toLocaleDateString("id-ID")}
                            </p>
                        )}
                        <p className="text-gray-600">
                            Dicetak pada:{" "}
                            {new Date().toLocaleDateString("id-ID")}
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">
                                Total Booking
                            </h3>
                            <p className="text-3xl font-bold text-blue-600">
                                {totalBookings}
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">
                                Total Pendapatan
                            </h3>
                            <p className="text-3xl font-bold text-green-600">
                                {formatCurrency(totalRevenue)}
                            </p>
                        </div>
                    </div>

                    {/* Booking Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        No
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Tanggal
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Nama Customer
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Layanan
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Cutter
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Jadwal
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Harga
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr
                                        key={booking.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {new Date(
                                                booking.date
                                            ).toLocaleDateString("id-ID")}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {booking.customer_name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {booking.service?.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {booking.cutter?.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {booking.schedule?.time_range}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            {formatCurrency(
                                                booking.service?.price || 0
                                            )}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">
                                            <span
                                                className={`px-2 py-1 text-xs rounded ${getStatusColor(
                                                    booking.status
                                                )}`}
                                            >
                                                {getStatusText(booking.status)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {bookings.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">
                                Tidak ada data booking untuk periode yang
                                dipilih.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default BookingReport;
