import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <div>
    <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Contact;
