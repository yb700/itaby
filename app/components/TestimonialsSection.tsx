"use client";

import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Jane Doe",
        feedback: "ITABY transformed our IT infrastructure, making us more efficient than ever.",
        position: "CEO, TechCorp",
        logo: "https://img.logoipsum.com/345.svg",
        rating: 5,
    },
    {
        name: "John Smith",
        feedback: "Their cloud migration service was seamless and cost-effective.",
        position: "Director, CloudInnovators",
        logo: "https://img.logoipsum.com/340.svg",
        rating: 4,
    },
    {
        name: "Alice Brown",
        feedback: "Thanks to ITABY, our network is secure and lightning-fast.",
        position: "Manager, RetailNet",
        logo: "https://img.logoipsum.com/338.svg",
        rating: 5,
    },
    {
        name: "Yonis Abdi",
        feedback: "Exceptional service! ITABY took our web infrastructure to the next level.",
        position: "CEO, WebstarDev",
        logo: "/logo/logo.png",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2 
                    className="text-5xl font-bold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Clients Say
                </motion.h2>

                {/* Testimonials Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <TestimonialCard 
                                name={testimonial.name} 
                                feedback={testimonial.feedback} 
                                position={testimonial.position} 
                                logo={testimonial.logo}
                                rating={testimonial.rating}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;