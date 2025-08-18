"use client";

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    organizationType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you would send formData to your backend or email service
    console.log('Form submitted:', formData);
  };

  return (
    <section className="flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {submitted ? (
          <div className="w-full flex justify-center items-center">
            <div className="text-center">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <p className="text-green-600 text-2xl font-semibold mb-2">
                Thank you for reaching out!
              </p>
              <p className="text-gray-600 text-lg">
                We'll get back to you within 24 hours to discuss how ITABY can help your organization.
              </p>
            </div>
          </div>
        ) : (
          <>
            <form
              className="basis-3/4 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onSubmit={handleSubmit}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Let's Transform Your Organization
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your technology needs and we'll show you how ITABY can help without breaking the bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-bold mb-2 text-gray-700">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organizationType" className="block text-sm font-bold mb-2 text-gray-700">
                    Organization Type *
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your sector</option>
                    <option value="charity">Charity</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your technology challenges, current systems, or specific needs..."
                  className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </button>
            </form>

            <div className="basis-1/4 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                Ready to Transform?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                At ITABY, we believe technology should empower everyone—not just those with deep pockets.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-white" />
                  <div>
                    <h4 className="text-xl font-semibold">Email us</h4>
                    <h6 className="text-lg opacity-90">info@itaby.com</h6>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/20 rounded-lg">
                <h4 className="font-semibold mb-2">Why Choose ITABY?</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Affordable solutions for community organizations</li>
                  <li>• Built on care, collaboration, and community</li>
                  <li>• Proven track record of successful transformations</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactForm;