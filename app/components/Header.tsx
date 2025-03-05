"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="text-white shadow-lg sticky top-0 z-50 bg-primary bg-opacity-75">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <h1 className="text-2xl font-extrabold tracking-tight">
                    <Link href="/">
                        <motion.p
                            className="hover:text-accent transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.05 }}
                        >
                            ITABY
                        </motion.p>
                    </Link>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium items-center">
                    <Link href="/about">
                        <p className="hover:text-accent transition duration-300 ease-in-out">About Us</p>
                    </Link>
                    <Link href="/services">
                        <p className="hover:text-accent transition duration-300 ease-in-out">Services</p>
                    </Link>
                    <Link href="/testimonials">
                        <p className="hover:text-accent transition duration-300 ease-in-out">Testimonials</p>
                    </Link>
                    <Link href="/contact">
                        <p className="hover:text-accent transition duration-300 ease-in-out">Contact</p>
                    </Link>
                    <Link
                        href="/get-started"
                        className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
                        className="md:hidden bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-6 py-4 space-y-4">
                            <Link href="/about">
                                <p className="block hover:text-accent transition duration-300 ease-in-out">About Us</p>
                            </Link>
                            <Link href="/services">
                                <p className="block hover:text-accent transition duration-300 ease-in-out">Services</p>
                            </Link>
                            <Link href="/testimonials">
                                <p className="block hover:text-accent transition duration-300 ease-in-out">Testimonials</p>
                            </Link>
                            <Link href="/contact">
                                <p className="block hover:text-accent transition duration-300 ease-in-out">Contact</p>
                            </Link>
                            <Link
                                href="/get-started"
                                className="block bg-accent text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300 text-center"
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