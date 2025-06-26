import React from 'react';
const Portfolio = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(project => <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this project and the technologies
                    used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      React
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Portfolio;