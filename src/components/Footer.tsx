import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">Agam</span>
              <span className="text-2xl font-bold text-white">Works</span>
            </div>
            <p className="text-gray-300 mb-4">
              Innovative web & mobile solutions that drive your business
              forward. 6+ years of delivering excellence in application
              development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-gray-300 hover:text-white">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-white">
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-gray-300 hover:text-white">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="text-gray-300 hover:text-white">
                  Cloud & DevOps Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Infrastructure Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Automation Testing
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Park, Innovation Street, Bangalore, India 560001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@agamworks.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} AgamWorks Tech Solution Pvt Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;