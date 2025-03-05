"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <p className="text-center text-green-600 text-2xl font-semibold animate-fade-in">
              Thank you! Your message has been sent. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <form
              className="basis-3/4 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onSubmit={handleSubmit}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="text-gray-900 w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            <div className="basis-1/4 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Other Ways to Reach Out
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-2xl text-secondary" />
                  <div>
                    <h4 className="text-xl text-gray-600">Call us</h4>
                    <h6 className="text-lg text-secondary">07515330524</h6>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-secondary" />
                  <div>
                    <h4 className="text-xl text-gray-600">Email us</h4>
                    <h6 className="text-lg text-secondary">Info@itaby.com</h6>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-secondary" />
                  <div>
                    <h4 className="text-xl text-gray-600">Visit us</h4>
                    <h6 className="text-lg text-secondary">
                      123 Tech Street, Suite 456<br />
                      Innovation City, IC 78901
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactForm;