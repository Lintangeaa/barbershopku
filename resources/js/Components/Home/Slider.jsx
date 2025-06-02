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

    // Auto slide every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimateText(true);
        }, 600);
        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 relative h-full"
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                        <img
                            src={slide.image}
                            alt={`Slider Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className={`absolute inset-0 z-20 flex items-center justify-center px-4 transition-all duration-1000 ${
                                animateText
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            <div className="text-center text-white max-w-4xl">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                                    {slide.description}
                                </p>
                                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                    <RedirectButton
                                        href={route("booking.create")}
                                        className="bg-brown hover:bg-brown-dark transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                                    >
                                        Booking Sekarang
                                    </RedirectButton>
                                    <RedirectButton
                                        href={route("service")}
                                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brown transition-all duration-300 px-8 py-4 text-lg font-semibold"
                                    >
                                        Lihat Layanan
                                    </RedirectButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPreviousSlide}
                className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-30 hover:bg-opacity-60 p-3 lg:p-4 rounded-full transition-all duration-300 group"
            >
                <FaChevronLeft className="text-lg lg:text-xl group-hover:scale-110 transition-transform" />
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-30 hover:bg-opacity-60 p-3 lg:p-4 rounded-full transition-all duration-300 group"
            >
                <FaChevronRight className="text-lg lg:text-xl group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setAnimateText(false);
                            setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slider;
