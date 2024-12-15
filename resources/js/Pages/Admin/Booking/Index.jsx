import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import { MdPreview } from "react-icons/md";

const BookingIndex = ({ bookings }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Booking" />

            <div className="px-8 py-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Daftar Booking
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    ID Booking
                                </th>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    Nama Pelanggan
                                </th>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    Layanan
                                </th>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    Jadwal
                                </th>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    Status Booking
                                </th>
                                <th className="border px-6 py-3 text-left text-gray-700">
                                    Status Pembayaran
                                </th>
                                <th className="border px-6 py-3 text-center text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr
                                    key={booking.id}
                                    className={
                                        index % 2 === 0
                                            ? "bg-gray-50 hover:bg-gray-100"
                                            : "bg-white hover:bg-gray-100"
                                    }
                                >
                                    <td className="border px-6 py-4 text-gray-700">
                                        {booking.id}
                                    </td>
                                    <td className="border px-6 py-4 text-gray-700">
                                        {booking.customer_name}
                                    </td>
                                    <td className="border px-6 py-4 text-gray-700">
                                        {booking.service.name}
                                    </td>
                                    <td className="border px-6 py-4 text-gray-700">
                                        {new Date(
                                            booking.date
                                        ).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}{" "}
                                        - {booking.schedule.time_range}
                                    </td>
                                    <td className="border px-6 py-4 text-gray-700">
                                        {booking.status == 1 && (
                                            <span className="text-yellow-500 font-semibold">
                                                Pending
                                            </span>
                                        )}
                                        {booking.status == 2 && (
                                            <span className="text-blue-500 font-semibold">
                                                Di ACC
                                            </span>
                                        )}
                                        {booking.status == 3 && (
                                            <span className="text-green-500 font-semibold">
                                                Selesai
                                            </span>
                                        )}
                                    </td>

                                    <td className="border px-6 py-4">
                                        {booking.payment_proof ? (
                                            <div className="flex space-x-2 items-center">
                                                <span className="text-green-500 font-semibold">
                                                    Sudah Dibayar
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        openModal(
                                                            booking
                                                                .payment_proof
                                                                .proof_image
                                                        )
                                                    }
                                                    className="text-blue-500 hover:text-blue-700"
                                                    title="Preview"
                                                >
                                                    <MdPreview size={20} />
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-red-500 font-semibold">
                                                Belum Dibayar
                                            </span>
                                        )}
                                    </td>
                                    <td className="border px-6 py-4 text-center space-x-4">
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            title="Edit"
                                        >
                                            <RiEdit2Line size={20} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete"
                                        >
                                            <RiDeleteBin2Line size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal for displaying the proof image */}
                {modalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-5 rounded-lg shadow-lg relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            >
                                ✕
                            </button>
                            <img
                                src={"/storage/" + selectedImage}
                                alt="Proof Image"
                                className="max-w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default BookingIndex;
