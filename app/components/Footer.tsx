"use client";

import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Logo & Social Links */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Image
                        src="/logo/logo.png"
                        alt="ITABY Logo"
                        width={100}
                        height={100}
                        priority
                        className="hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-sm text-center md:text-left">
                        Transforming businesses with cutting-edge IT solutions.
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

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        {["Home", "About Us", "Services", "Testimonials", "Contact"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="hover:text-gray-400 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="mailto:info@itaby.com"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                info@itaby.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+1234567890"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                +1 (234) 567-890
                            </a>
                        </li>
                        <li>
                            <p>123 Tech Street, Suite 456</p>
                            <p>Innovation City, IC 78901</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="font-bold text-white">ITABY</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;