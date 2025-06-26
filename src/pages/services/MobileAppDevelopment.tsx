import React from 'react';
const MobileAppDevelopment = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We build innovative mobile applications for iOS and Android
            platforms that engage users and drive business growth.
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-8">
            Our mobile app development team creates applications that combine
            beautiful design with powerful functionality.
          </p>
          {/* Placeholder for more content */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Mobile App Development Services Coming Soon
            </h2>
            <p>
              We're currently updating this page with more detailed information
              about our mobile application development services.
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default MobileAppDevelopment;