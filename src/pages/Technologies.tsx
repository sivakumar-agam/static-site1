import React from 'react';
const Technologies = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Technology Stack</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build powerful, scalable,
            and secure applications.
          </p>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'Angular', 'Node.js', 'Flutter', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL'].map((tech, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h3 className="font-medium text-gray-800">{tech}</h3>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Technologies;