import React from "react";
import { FaCut, FaPaintBrush, FaRegSmile, FaHeadset } from "react-icons/fa";
import ServiceCard from "./Card/ServiceCard";

const LayananKami = () => {
    const services = [
        {
            icon: <FaCut />, // Ikon untuk layanan potong rambut
            title: "Potong Rambut",
            description:
                "Nikmati potongan rambut dengan gaya terbaru dan sesuai keinginan Anda. Layanan cepat dan nyaman yang membuat Anda tampil lebih segar.",
        },
        {
            icon: <FaPaintBrush />, // Ikon untuk layanan pewarnaan rambut
            title: "Pewarnaan Rambut",
            description:
                "Ubah penampilan Anda dengan warna rambut yang trendi. Kami menyediakan berbagai pilihan warna yang sesuai dengan gaya Anda.",
        },
        {
            icon: <FaRegSmile />, // Ikon untuk layanan perawatan wajah
            title: "Perawatan Wajah",
            description:
                "Layanan perawatan wajah untuk menenangkan kulit dan memberi tampilan yang lebih cerah dan segar.",
        },
        {
            icon: <FaHeadset />, // Ikon untuk layanan konsultasi atau layanan pelanggan
            title: "Konsultasi Gaya",
            description:
                "Konsultasi dengan stylist kami untuk menentukan gaya rambut yang paling cocok dengan penampilan dan kepribadian Anda.",
        },
    ];

    return (
        <section className="min-h-[80vh] bg-cream px-20 py-16">
            {/* Judul Layanan */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
                    Layanan Kami
                </h2>
                <p className="text-lg sm:text-xl text-gray-700">
                    Kami menawarkan berbagai layanan untuk menjaga penampilan
                    dan kenyamanan Anda. Dari potong rambut hingga perawatan
                    wajah, semuanya disediakan oleh tim profesional kami.
                </p>
            </div>

            {/* Kotak Layanan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default LayananKami;
