import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function BookingIndex() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Booking
                </h2>
            }
        >
            <Head title="Booking" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold mb-4">Halaman Booking</h1>
                    <p>Ini adalah halaman untuk melakukan booking layanan.</p>

                    {/* Tempat untuk menampilkan daftar layanan dan jadwal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {/* Daftar layanan */}
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">Layanan 1</h3>
                            <p className="mt-2">Deskripsi layanan 1.</p>
                        </div>

                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">Layanan 2</h3>
                            <p className="mt-2">Deskripsi layanan 2.</p>
                        </div>

                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">Layanan 3</h3>
                            <p className="mt-2">Deskripsi layanan 3.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
