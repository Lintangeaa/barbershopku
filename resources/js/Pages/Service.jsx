import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FaCut, FaShower, FaMale, FaPaw } from "react-icons/fa"; // Contoh ikon dari react-icons

const ServicePage = () => {
    return (
        <GuestLayout>
            <Head title="Layanan Kami" />

            {/* Hero Section */}
            <section className="bg-brown text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Kami menawarkan berbagai layanan grooming yang membuat
                        Anda tampil lebih keren dan percaya diri. Pilih layanan
                        yang sesuai dengan kebutuhan Anda!
                    </p>
                </div>
            </section>

            {/* Layanan Sections */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-brown mb-12">
                        Layanan Kami
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Layanan 1: Potong Rambut */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <FaCut className="text-4xl text-brown mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Potong Rambut
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Potongan rambut sesuai dengan gaya Anda,
                                dilakukan oleh barber berpengalaman.
                            </p>
                            <p className="text-brown font-semibold">
                                Rp. 100.000
                            </p>
                        </div>
                        {/* Layanan 2: Cukur Jenggot */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <FaMale className="text-4xl text-brown mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Cukur Jenggot
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Layanan cukur jenggot yang rapi dan nyaman,
                                memberikan penampilan maksimal.
                            </p>
                            <p className="text-brown font-semibold">
                                Rp. 50.000
                            </p>
                        </div>
                        {/* Layanan 3: Cuci Rambut */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <FaShower className="text-4xl text-brown mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Cuci Rambut
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Cuci rambut dengan produk berkualitas tinggi
                                untuk kenyamanan Anda.
                            </p>
                            <p className="text-brown font-semibold">
                                Rp. 30.000
                            </p>
                        </div>
                        {/* Layanan 4: Grooming Hewan Peliharaan */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <FaPaw className="text-4xl text-brown mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Grooming Hewan
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Layanan grooming untuk hewan peliharaan Anda,
                                agar tetap sehat dan terawat.
                            </p>
                            <p className="text-brown font-semibold">
                                Rp. 150.000
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Testimoni */}
            <section className="py-16 bg-brown text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Testimoni Pelanggan
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg mx-4 mb-6">
                            <p className="text-lg italic text-gray-600 mb-4">
                                "Layanan potong rambut di sini sangat memuaskan!
                                Saya selalu merasa percaya diri setelah
                                mengunjungi barbershop ini."
                            </p>
                            <p className="font-semibold text-brown">John Doe</p>
                        </div>
                        <div className="max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg mx-4 mb-6">
                            <p className="text-lg italic text-gray-600 mb-4">
                                "Cukur jenggot di sini sangat rapi! Saya merasa
                                seperti mendapat layanan premium dengan harga
                                terjangkau."
                            </p>
                            <p className="font-semibold text-brown">
                                Jane Smith
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ServicePage;
