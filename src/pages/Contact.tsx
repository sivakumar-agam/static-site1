import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
const Contact = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have a project in mind? Get in touch with us to discuss how we can
            help you achieve your goals.
          </p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Get In Touch
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Park, Innovation Street, Bangalore, India 560001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@agamworks.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;