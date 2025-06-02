import ServiceCard from "@/Components/Home/Card/ServiceCard";
import RedirectButton from "@/Components/RedirectButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import {
    FaCut,
    FaShower,
    FaMale,
    FaPaw,
    FaStar,
    FaQuoteLeft,
    FaCheckCircle,
    FaAward,
} from "react-icons/fa";

const ServicePage = ({ services }) => {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        const observers = {};

        Object.keys(sectionRefs.current).forEach((key) => {
            if (sectionRefs.current[key]) {
                observers[key] = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisibleSections((prev) => ({
                                ...prev,
                                [key]: true,
                            }));
                        }
                    },
                    { threshold: 0.2 }
                );
                observers[key].observe(sectionRefs.current[key]);
            }
        });

        return () => {
            Object.values(observers).forEach((observer) =>
                observer.disconnect()
            );
        };
    }, []);

    const setSectionRef = (key) => (ref) => {
        sectionRefs.current[key] = ref;
    };

    const features = [
        {
            icon: <FaAward className="text-4xl text-brown mb-4" />,
            title: "Kualitas Premium",
            description:
                "Layanan berkualitas tinggi dengan peralatan modern dan produk terbaik",
        },
        {
            icon: <FaCheckCircle className="text-4xl text-brown mb-4" />,
            title: "Hasil Terjamin",
            description:
                "Kepuasan pelanggan adalah prioritas utama dengan hasil yang memuaskan",
        },
        {
            icon: <FaCut className="text-4xl text-brown mb-4" />,
            title: "Teknik Terdepan",
            description:
                "Menggabungkan teknik tradisional dengan trend modern yang up-to-date",
        },
    ];

    const testimonials = [
        {
            name: "Rizki Pratama",
            role: "Mahasiswa",
            content:
                "Layanan potong rambut di sini sangat memuaskan! Hasilnya selalu sesuai dengan yang saya inginkan. Barbernya juga ramah dan profesional.",
            rating: 5,
        },
        {
            name: "Andi Saputra",
            role: "Karyawan",
            content:
                "Sudah berlangganan di sini 3 tahun. Pelayanannya konsisten bagus dan harganya reasonable. Tempatnya juga nyaman dan bersih.",
            rating: 5,
        },
        {
            name: "Budi Santoso",
            role: "Pengusaha",
            content:
                "Barbershop terbaik di kota! Cukur jenggot dan potong rambutnya sangat rapi. Saya merasa seperti mendapat layanan premium.",
            rating: 5,
        },
    ];

    return (
        <GuestLayout>
            <Head title="Layanan Kami - Barbershop Premium dengan Berbagai Pilihan Grooming" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-brown text-white py-24 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
                    <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-full"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-brown text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Layanan Terbaik
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Layanan <span className="text-brown">Premium</span>{" "}
                            Kami
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-300">
                            Kami menawarkan berbagai layanan grooming premium
                            yang membuat Anda tampil lebih percaya diri dengan
                            sentuhan profesional dan hasil yang memuaskan.
                        </p>
                        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <RedirectButton
                                href={route("booking.create")}
                                className="bg-brown hover:bg-brown-dark transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                            >
                                Booking Sekarang
                            </RedirectButton>
                            <RedirectButton
                                href={route("contact")}
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brown transition-all duration-300 px-8 py-4 text-lg font-semibold"
                            >
                                Konsultasi Gratis
                            </RedirectButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                ref={setSectionRef("services")}
                className="py-16 lg:py-24 bg-gradient-to-br from-cream to-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${
                            visibleSections.services
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="text-brown text-sm font-semibold tracking-wider uppercase mb-2 block">
                            Pilihan Layanan
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Layanan <span className="text-brown">Unggulan</span>{" "}
                            Kami
                        </h2>
                        <div className="w-24 h-1 bg-brown mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Dari potongan rambut klasik hingga styling modern,
                            setiap layanan kami dikerjakan dengan keahlian
                            tinggi dan perhatian detail yang sempurna.
                        </p>
                    </div>

                    {/* Services Grid */}
                    {services && services.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 mb-16">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`transition-all duration-1000 ${
                                        visibleSections.services
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 200}ms`,
                                    }}
                                >
                                    <ServiceCard
                                        image={service.image}
                                        name={service.name}
                                        description={service.description}
                                        price={service.price}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">
                                Belum ada layanan tersedia.
                            </p>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div
                        className={`text-center transition-all duration-1000 delay-700 ${
                            visibleSections.services
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                                Siap untuk{" "}
                                <span className="text-brown">Gaya Baru?</span>
                            </h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Pilih layanan yang sesuai dengan kebutuhan Anda
                                dan rasakan pengalaman grooming terbaik!
                            </p>
                            <RedirectButton
                                href={route("booking.create")}
                                className="bg-brown hover:bg-brown-dark transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                            >
                                BOOKING SEKARANG
                            </RedirectButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                ref={setSectionRef("features")}
                className="py-16 lg:py-24 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${
                            visibleSections.features
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="text-brown text-sm font-semibold tracking-wider uppercase mb-2 block">
                            Mengapa Pilih Kami
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Keunggulan{" "}
                            <span className="text-brown">Layanan</span> Kami
                        </h2>
                        <div className="w-24 h-1 bg-brown mx-auto mb-6"></div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`text-center bg-gradient-to-br from-cream to-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                                    visibleSections.features
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                ref={setSectionRef("testimonials")}
                className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-brown text-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${
                            visibleSections.testimonials
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="text-brown text-sm font-semibold tracking-wider uppercase mb-2 block">
                            Testimoni Pelanggan
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Apa Kata <span className="text-brown">Mereka?</span>
                        </h2>
                        <div className="w-24 h-1 bg-brown mx-auto"></div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                                    visibleSections.testimonials
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-6">
                                    <FaQuoteLeft className="text-brown text-2xl mr-3" />
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className="text-yellow-400 text-sm"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-brown rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div
                        className={`text-center transition-all duration-1000 delay-700 ${
                            visibleSections.testimonials
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Bergabunglah dengan{" "}
                            <span className="text-brown">Pelanggan Puas</span>{" "}
                            Kami!
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                            Dapatkan pengalaman grooming terbaik dan rasakan
                            kepuasan yang sama seperti mereka.
                        </p>
                        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <RedirectButton
                                href={route("booking.create")}
                                className="bg-brown hover:bg-brown-dark transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                            >
                                Booking Sekarang
                            </RedirectButton>
                            <RedirectButton
                                href={route("about")}
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brown transition-all duration-300 px-8 py-4 text-lg font-semibold"
                            >
                                Tentang Kami
                            </RedirectButton>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ServicePage;
