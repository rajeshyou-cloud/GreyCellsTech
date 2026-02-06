import ContactForm from '../components/ContactForm';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to GreyCells Technologies</h1>
      <p className="mb-8 text-lg">Empowering businesses with digital solutions.</p>
      <ContactForm />
    </div>
  );
};

export default Landing;
