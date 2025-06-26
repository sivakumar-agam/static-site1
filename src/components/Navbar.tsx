import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Agam</span>
          <span className="text-2xl font-bold text-gray-800">Works</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </Link>
          <div className="relative group">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
              <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Web Development
              </Link>
              <Link to="/services/mobile-app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Mobile App Development
              </Link>
              <Link to="/services/cloud-devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Cloud & DevOps
              </Link>
            </div>
          </div>
          <Link to="/technologies" className="text-gray-700 hover:text-blue-600 font-medium">
            Technologies
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>
        <Link to="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
          Get a Free Consultation
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/services/web-development" className="text-gray-700 hover:text-blue-600 font-medium pl-4 text-sm" onClick={toggleMenu}>
              - Web Development
            </Link>
            <Link to="/services/mobile-app-development" className="text-gray-700 hover:text-blue-600 font-medium pl-4 text-sm" onClick={toggleMenu}>
              - Mobile App Development
            </Link>
            <Link to="/services/cloud-devops" className="text-gray-700 hover:text-blue-600 font-medium pl-4 text-sm" onClick={toggleMenu}>
              - Cloud & DevOps
            </Link>
            <Link to="/technologies" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Technologies
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-center transition-colors" onClick={toggleMenu}>
              Get a Free Consultation
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;