import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const Services = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business
            thrive in the digital world.
          </p>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <Link to="/services/web-development">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Web Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Full-stack development, custom web solutions, and performance
                  optimization to create powerful web applications.
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn More <ArrowRightIcon size={16} className="ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <Link to="/services/mobile-app-development">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Mobile App Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Cross-platform and native app development with a mobile-first
                  approach for iOS and Android devices.
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn More <ArrowRightIcon size={16} className="ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <Link to="/services/cloud-devops">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Cloud & DevOps
                </h3>
                <p className="text-gray-600 mb-4">
                  Infrastructure building, management, and DevOps solutions for
                  efficient and scalable applications.
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn More <ArrowRightIcon size={16} className="ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;