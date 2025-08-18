"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="text-gray-800 shadow-lg sticky top-0 z-50 bg-white/95 backdrop-blur-sm mx-4 mt-4 rounded-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <Link href="/" className="flex items-center">
                    <motion.div
                        className="hover:scale-105 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src="/logo/logo.png"
                            alt="ITABY Logo"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium items-center">
                    <Link href="/about">
                        <p className="hover:text-blue-600 transition duration-300 ease-in-out">About Us</p>
                    </Link>
                    <Link href="/services">
                        <p className="hover:text-blue-600 transition duration-300 ease-in-out">Services</p>
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={toggleMobileMenu}
                    aria-label="Open menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="md:hidden bg-white text-gray-800 shadow-lg rounded-b-3xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-6 py-4 space-y-4">
                            <Link href="/about">
                                <p className="block hover:text-blue-600 transition duration-300 ease-in-out">About Us</p>
                            </Link>
                            <Link href="/services">
                                <p className="block hover:text-blue-600 transition duration-300 ease-in-out">Services</p>
                            </Link>
                            <Link
                                href="/contact"
                                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 text-center shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;