import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;