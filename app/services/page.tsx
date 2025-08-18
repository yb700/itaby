import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShieldAlt, FaCloudUploadAlt, FaDatabase, FaNetworkWired, FaCogs, FaUsers, FaChartLine, FaHandshake, FaTools, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDatabase className="w-12 h-12" />,
      title: "CRM System Upgrades",
      description: "Modernize your customer relationship management systems to improve efficiency and better serve your community.",
      details: [
        "Legacy system assessment and migration planning",
        "Custom CRM development and integration",
        "Data migration and cleanup",
        "User training and support",
        "Ongoing maintenance and updates"
      ],
      benefits: ["Improved customer relationships", "Better data management", "Increased efficiency", "Cost savings"]
    },
    {
      icon: <FaCloudUploadAlt className="w-12 h-12" />,
      title: "Cloud Migration",
      description: "Seamlessly transition from on-premises to cloud infrastructure with minimal downtime and maximum cost savings.",
      details: [
        "Cloud readiness assessment",
        "Migration strategy development",
        "Infrastructure setup and configuration",
        "Data migration and testing",
        "Performance optimization"
      ],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better disaster recovery"]
    },
    {
      icon: <FaNetworkWired className="w-12 h-12" />,
      title: "Infrastructure Solutions",
      description: "Build robust, scalable IT infrastructure that grows with your organization and fits your budget.",
      details: [
        "Network design and implementation",
        "Hardware procurement and setup",
        "Security infrastructure deployment",
        "Backup and recovery systems",
        "Monitoring and maintenance"
      ],
      benefits: ["Reliable performance", "Scalable growth", "Enhanced security", "Reduced downtime"]
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Protect your organization with affordable, robust security solutions without breaking the bank.",
      details: [
        "Security assessment and audit",
        "Firewall and antivirus implementation",
        "Data encryption and backup",
        "Security training for staff",
        "24/7 threat monitoring"
      ],
      benefits: ["Protection against threats", "Compliance with regulations", "Peace of mind", "Data protection"]
    },
    {
      icon: <FaCogs className="w-12 h-12" />,
      title: "Process Automation",
      description: "Streamline operations and reduce manual tasks with smart automation to focus on your mission.",
      details: [
        "Process analysis and optimization",
        "Automation tool selection",
        "Workflow design and implementation",
        "Integration with existing systems",
        "Training and documentation"
      ],
      benefits: ["Increased productivity", "Reduced errors", "Cost savings", "Better resource allocation"]
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Get expert guidance on technology decisions that impact your organization's success.",
      details: [
        "Technology strategy development",
        "Vendor selection and management",
        "Project planning and oversight",
        "Budget optimization",
        "Technology roadmap creation"
      ],
      benefits: ["Informed decisions", "Cost optimization", "Risk mitigation", "Strategic planning"]
    }
  ];

  const process = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Discovery",
      description: "We start by understanding your organization's unique needs, challenges, and goals."
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Planning",
      description: "We develop a customized solution that fits your budget and timeline."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Implementation",
      description: "Our team works closely with yours to implement the solution with minimal disruption."
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure your success."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed specifically for community organizations.
            We help you embrace technology without breaking the bank.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}
              >
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Do</h3>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <span className="text-blue-600 text-sm mt-1">•</span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <span className="text-green-600 text-sm mt-1">✓</span>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl ${index % 2 === 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="text-center">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose ITABY?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges faced by community organizations and provide solutions that work for your budget and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Solutions</h3>
              <p className="text-gray-600">
                We believe technology should be accessible to everyone. Our pricing is designed to fit community organization budgets.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We're committed to strengthening the organizations that strengthen our communities. Your success is our success.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our track record speaks for itself. We've helped numerous organizations transform their technology infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how ITABY can help you embrace technology without breaking the bank.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
