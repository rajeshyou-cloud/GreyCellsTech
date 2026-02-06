import React from 'react';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <div className="font-bold text-xl text-blue-600">GreyCells</div>
    <div>
      <a href="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</a>
      <a href="/services" className="mx-2 text-gray-700 hover:text-blue-600">Services</a>
      <a href="/about" className="mx-2 text-gray-700 hover:text-blue-600">About</a>
      <a href="/contact" className="mx-2 text-gray-700 hover:text-blue-600">Contact</a>
    </div>
  </nav>
);

export default Navbar;
