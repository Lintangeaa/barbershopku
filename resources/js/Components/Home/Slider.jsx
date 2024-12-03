import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RedirectButton from "../RedirectButton";

const Slider = () => {
    const slides = [
        {
            image: "/images/slide-1.jpg",
            title: "Selamat Datang di Barbershop Kami",
            description:
                "Nikmati layanan potong rambut dan perawatan terbaik dengan tukang cukur kami yang berpengalaman.",
        },
        {
            image: "/images/slide-2.jpg",
            title: "Layanan Grooming Berkualitas",
            description:
                "Kami menyediakan layanan grooming terbaik dengan sentuhan pribadi, membuat Anda tampil lebih keren dan percaya diri.",
        },
        {
            image: "/images/slide-3.jpg",
            title: "Stylist Profesional",
            description:
                "Tim stylist profesional kami siap memberikan Anda penampilan baru yang sesuai dengan gaya Anda.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateText, setAnimateText] = useState(false);

    const goToNextSlide = () => {
        setAnimateText(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setAnimateText(false);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    // useEffect(() => {
    //     const intervalId = setInterval(goToNextSlide, 3000); // Setiap 3 detik

    //     // Membersihkan interval ketika komponen di-unmount
    //     return () => clearInterval(intervalId);
    // }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimateText(true);
        }, 500); // Delay sedikit sebelum teks muncul

        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    return (
        <section className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img
                            src={slide.image}
                            alt={`Slider Image ${index + 1}`}
                            className="w-full object-cover"
                        />
                        <div
                            className={`absolute top-1/2 left-0 right-0 text-center text-white p-4 transition-opacity duration-1000 ${
                                animateText ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <h2 className="text-2xl font-bold">
                                {slide.title}
                            </h2>
                            <p className="mt-2 text-lg">{slide.description}</p>
                            <div className="mt-2">
                                <RedirectButton href={"/"} className="bg-brown">
                                    Booking Sekarang
                                </RedirectButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={goToPreviousSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-65 transition-all duration-300"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-65 transition-all duration-300"
            >
                <FaChevronRight />
            </button>
        </section>
    );
};

export default Slider;
