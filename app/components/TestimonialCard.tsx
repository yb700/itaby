"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
    name: string;
    feedback: string;
    position: string;
    logo: string;
    rating?: number; // Optional rating out of 5
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, feedback, position, logo, rating = 5 }) => {
    return (
        <motion.div 
            className="relative flex flex-col items-start space-y-6 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Feedback Text */}
            <p className="text-xl text-gray-800 leading-relaxed italic">"{feedback}"</p>

            {/* Star Rating (Optional) */}
            <div className="flex space-x-1">
                {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4">
                <Image 
                    src={logo} 
                    alt={name} 
                    width={80} 
                    height={80} 
                    className="rounded-full object-cover"
                />
                <div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-500">{position}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;