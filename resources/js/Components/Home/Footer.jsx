// components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-brown text-white py-6 mt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Kolom 1: Logo dan Deskripsi */}
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Barbershop
                        </h2>
                        <p className="text-sm text-gray-300">
                            Kami menyediakan layanan potong rambut dan grooming
                            terbaik untuk Anda, dengan pengalaman dan pelayanan
                            yang memuaskan.
                        </p>
                    </div>

                    {/* Kolom 2: Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Kolom 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Contact Us
                        </h3>
                        <ul>
                            <li className="text-gray-300">
                                Email: info@barbershop.com
                            </li>
                            <li className="text-gray-300">
                                Phone: +1 234 567 890
                            </li>
                            <li className="text-gray-300">
                                Address: 123 Barbershop St, City, Country
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Barbershop. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
