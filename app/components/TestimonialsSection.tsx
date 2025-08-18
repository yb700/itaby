"use client";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: "Sarah Johnson",
        feedback: "ITABY helped our primary school recover from a devastating virus attack. Their late-night rescue mission turned into a complete transformation of our IT infrastructure. We couldn't be more grateful.",
        position: "Head Teacher, St. Mary's Primary School",
        logo: "/logo/logo.png",
        rating: 5,
    },
    {
        name: "Dr. Michael Chen",
        feedback: "As a small healthcare clinic, we needed affordable IT solutions. ITABY delivered exactly what we needed - modern systems that work for our budget and our patients.",
        position: "Medical Director, Community Health Clinic",
        logo: "/logo/logo.png",
        rating: 5,
    },
    {
        name: "Emma Rodriguez",
        feedback: "Our charity was struggling with outdated CRM systems. ITABY's affordable upgrade solution transformed how we manage donor relationships and serve our community.",
        position: "Executive Director, Hope Foundation",
        logo: "/logo/logo.png",
        rating: 5,
    },
    {
        name: "David Thompson",
        feedback: "The cloud migration ITABY performed for our retail business was seamless and cost-effective. We're now more efficient than ever, and our customers notice the difference.",
        position: "Owner, Thompson's Hardware Store",
        logo: "/logo/logo.png",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Community Leaders
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how ITABY has helped organizations like yours embrace technology
                        without breaking the bank.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <TestimonialCard
                                name={testimonial.name}
                                feedback={testimonial.feedback}
                                position={testimonial.position}
                                logo={testimonial.logo}
                                rating={testimonial.rating}
                            />
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Organizations Choose ITABY</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                            <div className="text-gray-600">Cost Savings</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;