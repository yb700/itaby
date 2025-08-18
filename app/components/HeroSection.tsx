"use client";

import { useEffect, useRef } from "react";
import { FaHandHoldingHeart, FaGraduationCap, FaHeartbeat, FaShoppingCart, FaHardHat } from "react-icons/fa";

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down the video slightly
        }
    }, []);

    const sectors = [
        { name: "Charity", icon: <FaHandHoldingHeart className="w-4 h-4" /> },
        { name: "Education", icon: <FaGraduationCap className="w-4 h-4" /> },
        { name: "Healthcare", icon: <FaHeartbeat className="w-4 h-4" /> },
        { name: "Retail", icon: <FaShoppingCart className="w-4 h-4" /> },
        { name: "Construction", icon: <FaHardHat className="w-4 h-4" /> },
    ];

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
                    <source src="/heroVideo/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Fallback Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Heading */}
                <h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
                >
                    Technology That{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Empowers Everyone
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-lg md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto"
                >
                    At ITABY, we believe technology should empower everyone—not just those with deep pockets.
                    We're an IT consultancy dedicated to delivering smart, affordable hardware and software
                    solutions to the organisations that form the backbone of our communities.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a
                        href="/services"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        aria-label="Explore our services"
                    >
                        Our Services
                    </a>
                    <a
                        href="/contact"
                        className="border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        aria-label="Contact us"
                    >
                        Get Started
                    </a>
                </div>

                {/* Sectors */}
                <div className="mt-16 justify-center items-center flex flex-col">
                    <p className="text-sm text-gray-300 mb-6">Serving Community Organizations</p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
                            >
                                <span className="text-blue-300">{sector.icon}</span>
                                <span className="text-sm font-medium">{sector.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;