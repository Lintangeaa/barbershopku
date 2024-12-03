import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const AboutPage = () => {
    return (
        <GuestLayout>
            <Head title="About" />

            {/* Section 1: Hero Section */}
            <section className="bg-brown text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Barbershop kami adalah tempat di mana keahlian dan
                        kenyamanan bertemu. Nikmati layanan grooming terbaik dan
                        dapatkan pengalaman yang memuaskan.
                    </p>
                    <p className="text-lg sm:text-xl">
                        Kami percaya bahwa setiap pria berhak tampil terbaik,
                        dan tim kami siap memberikan Anda layanan yang
                        memuaskan.
                    </p>
                </div>
            </section>

            {/* Section 2: Our Story */}
            <section className="bg-cream py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-brown mb-8">
                        Cerita Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/about-us.jpg"
                                alt="Our Story"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-lg sm:text-xl text-gray-700 mb-4">
                                Kami mulai sebagai barbershop kecil, namun
                                dengan keinginan besar untuk memberikan
                                pelayanan terbaik. Setiap potongan rambut dan
                                perawatan kami lakukan dengan penuh perhatian
                                dan detail, untuk memastikan Anda selalu merasa
                                puas dan percaya diri.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-700">
                                Dengan tim yang terlatih dan atmosfer yang
                                nyaman, kami berkomitmen untuk menjadi pilihan
                                utama bagi para pelanggan yang peduli akan
                                penampilan dan kenyamanan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Tim Kami */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-brown mb-8">
                        Tim Kami
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src="/images/barber-1.jpg"
                                alt="Barber 1"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                John Doe
                            </h3>
                            <p className="text-sm text-gray-600">
                                Senior Barber
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src="/images/barber-2.jpg"
                                alt="Barber 2"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Jane Smith
                            </h3>
                            <p className="text-sm text-gray-600">
                                Barber Stylist
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src="/images/barber-3.jpg"
                                alt="Barber 3"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Michael Lee
                            </h3>
                            <p className="text-sm text-gray-600">
                                Junior Barber
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src="/images/barber-4.jpg"
                                alt="Barber 4"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-brown mb-2">
                                Sarah Brown
                            </h3>
                            <p className="text-sm text-gray-600">
                                Barber Stylist
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Kenapa Memilih Kami */}
            <section className="bg-cream py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-brown mb-8">
                        Kenapa Memilih Kami?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-brown mb-4">
                                Layanan Profesional
                            </h3>
                            <p className="text-gray-600">
                                Kami memiliki tim barber profesional yang siap
                                memberikan Anda penampilan terbaik.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-brown mb-4">
                                Kenangan yang Tak Terlupakan
                            </h3>
                            <p className="text-gray-600">
                                Setiap kunjungan adalah pengalaman yang
                                menyenangkan, nyaman, dan penuh kenangan.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-brown mb-4">
                                Harga Terjangkau
                            </h3>
                            <p className="text-gray-600">
                                Kami menawarkan layanan berkualitas dengan harga
                                yang bersahabat bagi semua kalangan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Testimoni */}
            <section className="bg-brown text-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Testimoni Pelanggan
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg mx-4 mb-6">
                            <p className="text-lg italic text-gray-600 mb-4">
                                "Pelayanan terbaik yang pernah saya dapatkan!
                                Barbershop ini benar-benar membuat saya merasa
                                nyaman dan percaya diri."{" "}
                            </p>
                            <p className="font-semibold text-brown">John Doe</p>
                        </div>
                        <div className="max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg mx-4 mb-6">
                            <p className="text-lg italic text-gray-600 mb-4">
                                "Layanan yang sangat memuaskan! Saya merasa
                                segar dan siap menghadapi hari."{" "}
                            </p>
                            <p className="font-semibold text-brown">
                                Emily White
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default AboutPage;
