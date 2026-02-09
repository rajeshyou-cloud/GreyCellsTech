import { Link } from 'react-router-dom';

const Home = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-5xl font-bold mb-6">GreyCells Technologies</h1>
    <p className="mb-8 text-lg">Innovative digital solutions for your business.</p>
    <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">Contact Us</Link>
  </main>
);

export default Home;
