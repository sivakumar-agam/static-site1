import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
const About = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About AgamWorks</h1>
          <p className="text-xl max-w-3xl mx-auto">
            With 6+ years of experience in web and mobile application
            development, we've built a reputation for delivering innovative
            solutions that drive businesses forward.
          </p>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded over 6 years ago, AgamWorks began with a simple mission:
                to create extraordinary applications that solve real business
                problems. What started as a small team of passionate developers
                has grown into a full-service tech solution provider trusted by
                businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-4">
                Throughout our journey, we've remained committed to innovation,
                quality, and client satisfaction. Our team has expanded, but our
                core values remain the same—delivering solutions that combine
                technical excellence with practical business value.
              </p>
              <p className="text-gray-600">
                Today, AgamWorks stands as a leader in web and mobile
                application development, known for our expertise in creating
                fast, secure, and user-friendly solutions that help businesses
                thrive in the digital age.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that
                drive growth, improve efficiency, and create exceptional user
                experiences. We aim to be the trusted technology partner that
                transforms ideas into powerful, scalable applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be recognized globally as a leader in creating technology
                solutions that make a meaningful impact on businesses and their
                customers. We strive to continuously push the boundaries of
                what's possible in web and mobile application development.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Why Choose AgamWorks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                6+ Years of Experience
              </h3>
              <p className="text-gray-600">
                With over half a decade in the industry, we bring proven
                expertise and a track record of successful projects across
                various sectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Innovative Solutions
              </h3>
              <p className="text-gray-600">
                We don't just follow trends—we create custom, out-of-the-box
                solutions tailored to your unique business challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Speed to Market
              </h3>
              <p className="text-gray-600">
                We understand the importance of timing in business. Our
                efficient processes ensure quick development and deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Cost Effectiveness
              </h3>
              <p className="text-gray-600">
                We deliver high-quality solutions while helping you minimize
                budgets and maximize return on investment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                Our team stays at the forefront of technology, ensuring that
                your solutions leverage the latest advancements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 mb-4">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Client-Focused Approach
              </h3>
              <p className="text-gray-600">
                We prioritize understanding your business needs and goals to
                deliver solutions that truly add value.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(member => <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member + 10}.jpg`} alt="Team member" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Team Member {member}
                  </h3>
                  <p className="text-blue-600 text-sm mb-2">Senior Developer</p>
                  <p className="text-gray-600 text-sm">
                    With over 8 years of experience in software development,
                    specializing in web and mobile applications.
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;