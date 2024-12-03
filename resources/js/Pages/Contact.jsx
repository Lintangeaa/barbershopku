import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

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
        // Logic untuk mengirim pesan kontak (misalnya menggunakan API)
        alert("Pesan terkirim!");
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <GuestLayout>
            <Head title="Contact Us" />

            {/* Hero Section */}
            <section className="bg-brown text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Kami siap membantu Anda! Kirimkan pesan atau hubungi
                        kami melalui informasi di bawah.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-brown mb-12">
                        Formulir Kontak
                    </h2>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                {/* Nama */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
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

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
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

                            {/* Pesan */}
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                                className="w-full bg-brown text-white py-2 rounded-md text-lg font-semibold hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2 transition duration-300"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-brown mb-8">
                        Informasi Kontak
                    </h2>
                    <div className="flex justify-center space-x-16">
                        {/* Alamat */}
                        <div className="text-gray-800">
                            <h3 className="font-semibold text-lg text-brown mb-4">
                                Alamat
                            </h3>
                            <p>Jalan Barbershop No.1, Jakarta, Indonesia</p>
                        </div>

                        {/* Telepon */}
                        <div className="text-gray-800">
                            <h3 className="font-semibold text-lg text-brown mb-4">
                                Telepon
                            </h3>
                            <p>+62 123 456 789</p>
                        </div>

                        {/* Email */}
                        <div className="text-gray-800">
                            <h3 className="font-semibold text-lg text-brown mb-4">
                                Email
                            </h3>
                            <p>info@barbershop.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="py-16 bg-brown">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-white mb-8">
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
