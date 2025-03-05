"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down the video slightly
        }
    }, []);

    return (
        <section className="h-screen flex flex-col text-white justify-center items-center relative overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="\heroVideo\3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Fallback Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Heading */}
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Empowering Businesses with{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Smarter IT Solutions
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    At ITABY, we align technology with your goals to unlock a world of possibilities. 
                    From cloud solutions to cybersecurity, we’ve got you covered.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="/services"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        aria-label="Explore our services"
                    >
                        Our Services
                    </a>
                    <a
                        href="/contact"
                        className="border border-white hover:bg-white hover:text-accent text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        aria-label="Contact us"
                    >
                        Contact Us
                    </a>
                </motion.div>

                {/* Client Logos Carousel */}
                <motion.div
                    className="mt-16 justify-center items-center flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <p className="text-sm text-gray-300 mb-4">Trusted by leading companies</p>
                    <div className="flex justify-center items-center space-x-8 bg-white/35 px-6 py-4 rounded-full max-w-xl">
                        {[
                            "https://img.logoipsum.com/345.svg",
                            "https://img.logoipsum.com/340.svg",
                            "https://img.logoipsum.com/338.svg",
                            "/logo/logo.png",
                        ].map((logo, index) => (
                            <div key={index} className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={logo}
                                    alt={`Client Logo ${index + 1}`}
                                    width={100}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;