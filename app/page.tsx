import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
