import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaUserTie, FaConciergeBell, FaChartBar } from "react-icons/fa";
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from "recharts";

export default function Dashboard({ cutters, services, bookings }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            href="/cutters"
                            className="block bg-white shadow rounded-lg p-6 hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center space-x-4">
                                <FaUserTie className="text-3xl text-blue-500" />
                                <div>
                                    <div className="text-sm text-gray-500">
                                        Total Cutter
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">
                                        {cutters}
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/services"
                            className="block bg-white shadow rounded-lg p-6 hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center space-x-4">
                                <FaConciergeBell className="text-3xl text-green-500" />
                                <div>
                                    <div className="text-sm text-gray-500">
                                        Total Pelayanan
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">
                                        {services}
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/booking"
                            className="block bg-white shadow rounded-lg p-6 hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center space-x-4">
                                <FaChartBar className="text-3xl text-orange-500" />
                                <div>
                                    <div className="text-sm text-gray-500">
                                        Total Booking Tahun Ini
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">
                                        {bookings.reduce(
                                            (sum, item) => sum + item.total,
                                            0
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Booking Chart */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <FaChartBar className="mr-2 text-orange-500" />
                            Booking
                        </h3>

                        {bookings.length === 0 ? (
                            <p className="text-gray-500">
                                Data booking belum tersedia.
                            </p>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={bookings}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="total" fill="#f97316" />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
