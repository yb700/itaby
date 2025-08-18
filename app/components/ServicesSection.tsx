"use client";

import { FaShieldAlt, FaCloudUploadAlt, FaDatabase, FaNetworkWired, FaCogs, FaUsers } from "react-icons/fa";

const services = [
    {
        title: "CRM System Upgrades",
        description: "Modernize your customer relationship management systems to improve efficiency and better serve your community.",
        icon: <FaDatabase className="w-12 h-12" />,
    },
    {
        title: "Cloud Migration",
        description: "Seamlessly transition from on-premises to cloud infrastructure with minimal downtime and maximum cost savings.",
        icon: <FaCloudUploadAlt className="w-12 h-12" />,
    },
    {
        title: "Infrastructure Solutions",
        description: "Build robust, scalable IT infrastructure that grows with your organization and fits your budget.",
        icon: <FaNetworkWired className="w-12 h-12" />,
    },
    {
        title: "Cybersecurity",
        description: "Protect your organization with affordable, robust security solutions without breaking the bank.",
        icon: <FaShieldAlt className="w-12 h-12" />,
    },
    {
        title: "Process Automation",
        description: "Streamline operations and reduce manual tasks with smart automation to focus on your mission.",
        icon: <FaCogs className="w-12 h-12" />,
    },
    {
        title: "IT Consulting",
        description: "Get expert guidance on technology decisions that impact your organization's success.",
        icon: <FaUsers className="w-12 h-12" />,
    },
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Smart Solutions for{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Community Organizations
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From upgrading CRM systems to migrating entire infrastructures, we help organizations
                        embrace the future without breaking the bank.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
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
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Learn More Button */}
                            <button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                                aria-label={`Learn more about ${service.title}`}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
                    <p className="text-xl mb-6 opacity-90">
                        Let's discuss how ITABY can help you embrace technology without breaking the bank.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;