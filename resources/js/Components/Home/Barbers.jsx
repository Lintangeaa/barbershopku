// components/OurBarbers.jsx
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurBarbers = ({cutters}) => {
    console.log(cutters)
    
    // Menggunakan ref untuk merujuk ke elemen container
    const sliderRef = useRef(null);

    // Fungsi untuk berpindah ke slide berikutnya
    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += sliderRef.current.offsetWidth; // Geser ke kanan
        }
    };

    // Fungsi untuk berpindah ke slide sebelumnya
    const goToPreviousSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth; // Geser ke kiri
        }
    };

    return (
        <section className="px-20 py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
                    Barber Kami
                </h2>
                <p className="text-lg sm:text-xl text-gray-700">
                    Temui para barber kami yang ahli dan berpengalaman dalam
                    memberikan layanan terbaik untuk Anda.
                </p>
            </div>

            <div className="relative">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto space-x-4 scrollbar-hide"
                >
                    {cutters.map((barber, index) => (
                        <div
                            key={index}
                            className="w-1/2 md:w-1/4 flex-shrink-0"
                        >
                            <div className="relative group hover:cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                       src={`/storage/${barber.image}`}
                                        alt={barber.name}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:brightness-50"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-brown bg-opacity-70 text-white p-4 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500">
                                        <h3 className="text-xl font-semibold">
                                            {barber.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBarbers;
