"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div 
                    className="md:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        Elevating Businesses <br /> with Smart IT Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        At ITABY, we believe in the transformative power of technology. 
                        Our mission is to empower businesses of all sizes with innovative, 
                        scalable, and secure IT solutions that drive growth and efficiency. 
                        From cloud migration to cybersecurity, we’re here to help you 
                        navigate the digital landscape with confidence.
                    </p>

                    {/* Why Choose Us */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800">Why Choose ITABY?</h3>
                        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                            <li>Tailored solutions for your unique business needs</li>
                            <li>Expert team with decades of industry experience</li>
                            <li>Commitment to security, reliability, and innovation</li>
                        </ul>
                    </div>

                    {/* Learn More Button */}
                    <a
                        href="/about"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
                        aria-label="Learn more about ITABY"
                    >
                        Learn More
                    </a>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                    className="md:w-1/2 flex justify-center relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <Image
                            src="/logo/logo.png"
                            alt="ITABY Logo"
                            width={450}
                            height={450}
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;