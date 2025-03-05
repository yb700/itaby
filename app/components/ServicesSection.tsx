"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCloudUploadAlt, FaRobot, FaNetworkWired } from "react-icons/fa";

const services = [
    {
        title: "IT Security",
        description: "Protect your business with robust cybersecurity solutions tailored to your needs. From threat detection to data encryption, we ensure your systems are secure.",
        icon: <FaShieldAlt className="w-12 h-12" />,
    },
    {
        title: "Cloud Migration",
        description: "Seamlessly transition to the cloud for greater efficiency and scalability. Our experts handle everything from planning to execution, ensuring minimal downtime.",
        icon: <FaCloudUploadAlt className="w-12 h-12" />,
    },
    {
        title: "Automation",
        description: "Streamline your operations with cutting-edge automation tools. Reduce manual tasks, improve accuracy, and boost productivity across your organization.",
        icon: <FaRobot className="w-12 h-12" />,
    },
    {
        title: "Network Optimization",
        description: "Optimize your infrastructure for speed, reliability, and performance. We design and implement solutions to keep your network running at peak efficiency.",
        icon: <FaNetworkWired className="w-12 h-12" />,
    },
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2 
                    className="text-5xl font-bold tracking-tight text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col justify-between items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Icon */}
                            <div className="text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-600 mb-6">
                                {service.description}
                            </p>

                            {/* Learn More Button */}
                            <button
                                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                aria-label={`Learn more about ${service.title}`}
                            >
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;