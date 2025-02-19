import React from "react";
import { FaCut, FaPaintBrush, FaRegSmile, FaHeadset } from "react-icons/fa";
import ServiceCard from "./Card/ServiceCard";
import RedirectButton from "../RedirectButton";
import dataStore from "@/Store/data";

const LayananKami = ({services}) => {
    return (
        <section className="min-h-[80vh] bg-cream px-20 py-16">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title} 
                        image={service.image}
                        name={service.name}
                        description={service.description}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center p-2 mt-4">
                <RedirectButton
                    href={route("booking.create")}
                    className="bg-brown"
                >
                    BOOKING SEKARANG
                </RedirectButton>
            </div>
        </section>
    );
};

export default LayananKami;
