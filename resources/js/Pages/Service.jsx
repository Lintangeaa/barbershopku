import ServiceCard from "@/Components/Home/Card/ServiceCard";
import RedirectButton from "@/Components/RedirectButton";
import GuestLayout from "@/Layouts/GuestLayout";
import dataStore from "@/Store/data";
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">
                        {dataStore.services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center items-center p-2 mt-4">
                        <RedirectButton
                            href={route("booking.create")}
                            className=" bg-brown"
                        >
                            BOOKING SEKARANG
                        </RedirectButton>
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
