import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/contact", formData)
            .then((response) => {
                console.log("Form submitted successfully!", response.data);
                Swal.fire({
                    icon: "success",
                    title: "Pesan Terkirim!",
                    text:
                        response.data.message || "Pesan Anda berhasil dikirim.",
                });
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("There was an error submitting the form!", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text:
                        error.response.data.message ||
                        "Terjadi kesalahan saat mengirim pesan.",
                });
            });
    };

    return (
        <GuestLayout>
            <Head title="Contact Us" />

            <section className="py-20 text-center text-white bg-brown">
                <div className="container px-6 mx-auto">
                    <h1 className="mb-4 text-4xl font-bold">Hubungi Kami</h1>
                    <p className="mb-6 text-lg sm:text-xl">
                        Kami siap membantu Anda! Kirimkan pesan atau hubungi
                        kami melalui informasi di bawah.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-cream">
                <div className="container px-6 mx-auto">
                    <h2 className="mb-12 text-3xl font-semibold text-center text-brown">
                        Formulir Kontak
                    </h2>
                    <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-semibold text-gray-700"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown focus:border-brown"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-semibold text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown focus:border-brown"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-semibold text-gray-700"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown focus:border-brown"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 text-lg font-semibold text-white transition duration-300 rounded-md bg-brown hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="mb-8 text-3xl font-semibold text-brown">
                        Informasi Kontak
                    </h2>
                    <div className="flex justify-center space-x-16">
                        {/* Alamat */}
                        <div className="text-gray-800">
                            <h3 className="mb-4 text-lg font-semibold text-brown">
                                Alamat
                            </h3>
                            <p>Jalan Barbershop No.1, Jakarta, Indonesia</p>
                        </div>

                        {/* Telepon */}
                        <div className="text-gray-800">
                            <h3 className="mb-4 text-lg font-semibold text-brown">
                                Telepon
                            </h3>
                            <p>+62 123 456 789</p>
                        </div>

                        {/* Email */}
                        <div className="text-gray-800">
                            <h3 className="mb-4 text-lg font-semibold text-brown">
                                Email
                            </h3>
                            <p>info@barbershop.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="py-16 bg-brown">
                <div className="container px-6 mx-auto">
                    <h2 className="mb-8 text-3xl font-semibold text-center text-white">
                        Temukan Kami
                    </h2>
                    <div className="w-full h-80 sm:h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ContactPage;
