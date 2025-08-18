import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaUsers, FaHeart, FaRocket, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Care",
      description: "Every project is personal. We treat your organization's success as our own."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work together with your team to create solutions that truly fit your needs."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Community",
      description: "We're committed to strengthening the organizations that strengthen our communities."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "A late-night call from a local primary school in crisis. Their systems were down, and they needed help immediately."
    },
    {
      year: "2021",
      title: "The Transformation",
      description: "What started as emergency IT support became a complete digital transformation project."
    },
    {
      year: "2022",
      title: "The Movement",
      description: "Friends and IT professionals came together, inspired by the impact we could make on community organizations."
    },
    {
      year: "2023",
      title: "ITABY is Born",
      description: "Formal establishment of ITABY as a company dedicated to affordable IT solutions for community organizations."
    },
    {
      year: "2024",
      title: "Growing Impact",
      description: "Serving charities, schools, healthcare providers, and retail businesses across the community."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ITABY
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a team of IT professionals who believe technology should empower everyone—not just those with deep pockets.
            Our mission is to deliver smart, affordable solutions to the organizations that form the backbone of our communities.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  It all began with a desperate phone call late one evening. A local primary school had fallen victim to a devastating virus attack.
                  Their systems were down, student records were inaccessible, and they were facing the prospect of having to close their doors.
                </p>
                <p>
                  What started as a late-night rescue mission turned into something much bigger. As we worked to restore their systems,
                  we realized the broader challenges that community organizations face when it comes to technology.
                </p>
                <p>
                  That experience sparked a movement. Friends and IT professionals came together, united by a shared vision:
                  to make technology accessible and affordable for the organizations that serve our communities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6"></div>
              <Image
                src="/logo/logo.png"
                alt="ITABY Logo"
                width={500}
                height={500}
                className="object-contain rounded-3xl relative z-10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Journey
          </motion.h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl italic mb-8 max-w-4xl mx-auto leading-relaxed">
              "We're here to make tech work for you—because at ITABY, it's all about you."
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              We believe that every organization, regardless of size or budget, deserves access to the technology
              they need to serve their communities effectively. From upgrading CRM systems to migrating entire
              infrastructures to the cloud, we help organizations embrace the future without breaking the bank.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how ITABY can help your organization embrace technology without breaking the bank.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
