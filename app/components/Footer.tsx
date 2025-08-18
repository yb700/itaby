"use client";

import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Social Links */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src="/logo/logo.png"
                            alt="ITABY Logo"
                            width={100}
                            height={100}
                            priority
                            className="hover:scale-105 transition-transform duration-300 mb-2"
                        />
                        <h3 className="text-2xl font-bold text-white mb-1">ITABY</h3>
                        <p className="text-sm text-blue-400 mb-2">It's All About You</p>
                    </div>
                    <p className="text-sm text-center md:text-left">
                        Empowering community organizations with affordable, smart IT solutions.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Our Services</h2>
                    <ul className="space-y-2">
                        {["CRM System Upgrades", "Cloud Migration", "Infrastructure Solutions", "Cybersecurity", "Process Automation", "IT Consulting"].map((service, index) => (
                            <li key={index}>
                                <a
                                    href="/services"
                                    className="hover:text-blue-400 transition-colors duration-300 text-sm"
                                >
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sectors We Serve */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Sectors We Serve</h2>
                    <ul className="space-y-2">
                        {["Charity", "Education", "Healthcare", "Retail", "Construction"].map((sector, index) => (
                            <li key={index}>
                                <span className="text-sm text-gray-400">
                                    {sector}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <h3 className="text-white text-lg font-semibold mb-3">Get Started Today</h3>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="text-blue-400" />
                            <a
                                href="mailto:info@itaby.com"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                info@itaby.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="font-bold text-white">ITABY</span> - It's All About You. All Rights Reserved.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    Empowering community organizations with affordable technology solutions.
                </p>
            </div>
        </footer>
    );
};

export default Footer;