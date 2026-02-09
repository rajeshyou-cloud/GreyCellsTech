import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <div className="font-bold text-xl text-blue-600">GreyCells</div>
    <div>
      <Link to="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/services" className="mx-2 text-gray-700 hover:text-blue-600">Services</Link>
      <Link to="/about" className="mx-2 text-gray-700 hover:text-blue-600">About</Link>
      <Link to="/contact" className="mx-2 text-gray-700 hover:text-blue-600">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
