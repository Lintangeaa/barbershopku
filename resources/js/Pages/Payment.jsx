import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Payment = ({ booking }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [proofFile, setProofFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const { data, setData, post, processing, errors } = useForm({
        proof_image: null, // Form data
    });

    // Handle file change and preview image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProofFile(file);
            setPreviewImage(URL.createObjectURL(file)); // Show image preview
            setData("proof_image", file); // Set file to form data
        }
    };

    // Submit form to upload proof image
    const handleSubmit = (e) => {
        e.preventDefault();

        // If no file is selected, show an alert
        if (!proofFile) {
            alert("Harap upload bukti pembayaran terlebih dahulu.");
            return;
        }

        post(`/payment/submit/${booking.id}`, {
            onSuccess: (response) => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text:
                        response.message ||
                        "Bukti pembayaran berhasil diupload! Anda akan menerima informasi melalui email.",
                }).then(() => {
                    // Redirect to the home page after swal closes
                    window.location.href = "/";
                });
                setIsOpen(false);
            },
            onError: (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Gagal!",
                    text:
                        error.message ||
                        "Terjadi kesalahan saat upload bukti pembayaran.",
                });
            },
        });
    };

    const getTime = (date) => {
        const now = new Date(date || Date.now());
        // Add 7 hours for UTC+7 (WIB)
        now.setUTCHours(now.getUTCHours() + 7);
        return now;
    };

    // Payment deadline is 2 hours after booking is created
    const bookingTime = getTime(booking.created_at);
    const deadline = new Date(bookingTime.getTime() + 2 * 60 * 60 * 1000);

    const calculateRemainingTime = () => {
        const now = getTime();
        return Math.max(0, deadline - now); // Remaining time in milliseconds
    };

    const handlePaymentClick = () => {
        const remaining_time = calculateRemainingTime();

        if (remaining_time <= 0) {
            Swal.fire({
                icon: "error",
                title: "Waktu pembayaran telah habis",
                text: "Booking Anda tidak valid.",
            });
        } else {
            const hours = Math.floor(remaining_time / (1000 * 60 * 60));
            const minutes = Math.floor(
                (remaining_time % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);

            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            setIsOpen(true);
        }
    };

    return (
        <GuestLayout header={"Pembayaran"}>
            <Head title="Pembayaran" />
            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-3xl font-semibold text-center mb-8">
                    Detail Pembayaran Booking
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <table className="table-auto w-full border-collapse">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    ID Booking
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.id}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Nama Pelanggan
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.customer_name}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Email
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.email}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Layanan
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.service.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Harga
                                </td>
                                <td className="border px-4 py-2">
                                    Rp{" "}
                                    {booking.service.price.toLocaleString(
                                        "id-ID"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Tanggal Booking
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.date}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold text-gray-600">
                                    Jadwal
                                </td>
                                <td className="border px-4 py-2">
                                    {booking.schedule.time_range}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-6 text-center">
                        <PrimaryButton
                            className="bg-brown"
                            onClick={handlePaymentClick}
                        >
                            Lanjutkan ke Pembayaran
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <Modal show={isOpen} onClose={() => setIsOpen(false)}>
                <div className="max-w-4xl mx-auto py-12">
                    <h1 className="text-3xl font-semibold text-center mb-8">
                        Pembayaran
                    </h1>
                    <p className="text-center mb-6">
                        Sisa waktu pembayaran: {hours} jam {minutes} menit
                    </p>
                    <p className="text-center mb-6">
                        Pembayaran dapat dilakukan dengan transfer ke bank
                        berikut:
                    </p>
                    <ul className="text-center mb-8">
                        <li>Bank: BCA</li>
                        <li>No Rekening: 123-456-789</li>
                        <li>Atas Nama: PT. Pembayaran</li>
                    </ul>

                    {/* Form Upload Bukti Pembayaran */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-center">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Bukti Pembayaran (foto)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="border p-2 w-full max-w-md mx-auto"
                            />
                            {previewImage && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Preview Bukti Pembayaran:
                                    </p>
                                    <img
                                        src={previewImage}
                                        alt="Preview Bukti Pembayaran"
                                        className="mx-auto w-48 h-auto rounded-lg border"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <PrimaryButton
                                className="bg-brown"
                                disabled={processing}
                            >
                                {processing
                                    ? "Submitting..."
                                    : "Submit Bukti Pembayaran"}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </GuestLayout>
    );
};

export default Payment;
