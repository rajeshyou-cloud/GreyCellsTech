import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-6">GreyCells Technologies</h1>
      <p className="mb-8 text-lg">Innovative digital solutions for your business.</p>
      <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">Contact Us</a>
    </main>
    <Footer />
  </div>
);

export default Home;
