import React from "react";
import RedirectButton from "../RedirectButton";

const About = () => {
    return (
        <section className="min-h-[80vh]">
            <div className="md:flex px-20 md:h-[80vh]">
                <article className="w-full md:w-1/2 flex justify-center items-center p-6">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-brown mb-4">
                            Barbershop
                        </h1>

                        <div className="mb-6">
                            <img
                                src="/images/about-logo.png"
                                alt="Barbershop Logo"
                                className="mx-auto w-32 h-auto"
                            />
                        </div>

                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Nikmati layanan potong rambut dan perawatan terbaik
                            dengan tukang cukur kami yang berpengalaman. Kami
                            menawarkan berbagai layanan grooming yang membuat
                            Anda tampil lebih keren dan percaya diri.
                        </p>

                        <div className="mt-6">
                            <RedirectButton
                                href={route("about")}
                                className="bg-brown"
                            >
                                Lebih Banyak Tentang Kami
                            </RedirectButton>
                        </div>
                    </div>
                </article>

                <article className="w-full md:w-1/2 h-full p-6">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/slide-1.jpg"
                                alt="Barbershop Image 1"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/slide-2.jpg"
                                alt="Barbershop Image 2"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="col-span-2 flex justify-center items-center">
                            <img
                                src="/images/slide-3.jpg"
                                alt="Barbershop Image 3"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
