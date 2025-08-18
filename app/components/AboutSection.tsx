"use client";

import Image from "next/image";
import { FaLightbulb, FaUsers, FaHeart, FaRocket } from "react-icons/fa";

const AboutSection = () => {
    const features = [
        {
            icon: <FaLightbulb className="w-8 h-8" />,
            title: "Innovation",
            description: "Cutting-edge solutions that drive real change"
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Community",
            description: "Built on collaboration and shared values"
        },
        {
            icon: <FaHeart className="w-8 h-8" />,
            title: "Care",
            description: "Every project is personal to us"
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Growth",
            description: "Scaling solutions that grow with you"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h2
                        className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8"
                    >
                        Our Story:{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            From Crisis to Community
                        </span>
                    </h2>

                    <p
                        className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        What started as a late-night rescue mission for a local primary school
                        became the foundation of ITABY—a company built on care, collaboration,
                        and community values.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Story */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our journey began with a simple act of service—helping a local primary school
                                recover from a devastating virus attack. What started as a late-night rescue
                                mission turned into a full-scale transformation, and ultimately, a long-term partnership.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg italic opacity-90">
                                "We're here to make tech work for you—because at ITABY, it's all about you."
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Today</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From upgrading CRM systems to migrating entire infrastructures to the cloud,
                                we help charities, schools, healthcare providers, and retail businesses embrace
                                the future without breaking the bank.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-3xl transform -rotate-3"></div>
                            <Image
                                src="/logo/logo.png"
                                alt="ITABY Logo"
                                width={500}
                                height={500}
                                className="object-contain rounded-3xl relative z-10 shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
                        >
                            <div className="text-blue-600 mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/about"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="Learn more about ITABY"
                    >
                        Learn More About Our Story
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;