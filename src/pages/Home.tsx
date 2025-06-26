import React from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon, SmartphoneIcon, ServerIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ValueProposition from '../components/ValueProposition';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedText from '../components/AnimatedText';
import GradientButton from '../components/GradientButton';
const Home = () => {
  return <div className="min-h-screen relative">
      {/* Animated particles background */}
      <AnimatedBackground />
      {/* Hero Section */}
      <Hero />
      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="inline-block py-1 px-3 bg-blue-500/10 rounded-full mb-4">
              <span className="text-blue-700 text-sm font-medium">
                Our Services
              </span>
            </motion.div>
            <AnimatedText text="Our Services" className="text-3xl font-bold mb-4 text-gray-800" />
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              We build extraordinary applications for both mobile and web
              platforms, focusing on speed, performance, and security.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<GlobeIcon size={36} />} title="Web Application Development" description="Full-stack development, custom web solutions, and performance optimization to create powerful web applications." link="/services/web-development" delay={0.1} />
            <ServiceCard icon={<SmartphoneIcon size={36} />} title="Mobile Application Development" description="Cross-platform and native app development with a mobile-first approach for iOS and Android devices." link="/services/mobile-app-development" delay={0.2} />
            <ServiceCard icon={<ServerIcon size={36} />} title="Cloud & DevOps Solutions" description="Infrastructure building, management, and DevOps solutions for efficient and scalable applications." link="/services/cloud-devops" delay={0.3} />
          </div>
          <div className="text-center mt-12">
            <GradientButton to="/services" icon={<ArrowRightIcon size={18} />}>
              View All Services
            </GradientButton>
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <ValueProposition />
      {/* Technology Stack Overview */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        {/* Circular tech elements */}
        <motion.div className="absolute top-20 -left-24 w-48 h-48 rounded-full bg-blue-100 opacity-30 blur-3xl" animate={{
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <motion.div className="absolute bottom-20 -right-24 w-64 h-64 rounded-full bg-indigo-100 opacity-30 blur-3xl" animate={{
        x: [0, -50, 0],
        y: [0, -30, 0]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <div className="container relative mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="inline-block py-1 px-3 bg-blue-500/10 rounded-full mb-4">
              <span className="text-blue-700 text-sm font-medium">
                Technology Stack
              </span>
            </motion.div>
            <AnimatedText text="Our Technology Stack" className="text-3xl font-bold mb-4 text-gray-800" />
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              We leverage the latest technologies to build powerful, scalable,
              and secure applications.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {['Flutter', 'NodeJS', 'Angular', 'React', 'AWS', 'Machine Learning'].map((tech, index) => <motion.div key={index} className="relative bg-white p-5 rounded-xl shadow-lg w-full text-center border border-gray-100 hover:border-blue-300 transition-colors duration-300" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl"></div>
                <p className="relative z-10 font-medium text-gray-800">
                  {tech}
                </p>
              </motion.div>)}
          </div>
          <div className="text-center mt-10">
            <Link to="/technologies" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group">
              <span>View Our Full Technology Stack</span>
              <motion.span className="ml-1 inline-block" initial={{
              x: 0
            }} whileHover={{
              x: 5
            }} transition={{
              type: 'spring',
              stiffness: 400
            }}>
                <ArrowRightIcon size={18} className="group-hover:text-blue-800" />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-[80px]" style={{
          top: '10%',
          left: '5%'
        }} animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <motion.div className="absolute w-96 h-96 rounded-full bg-indigo-500/20 blur-[80px]" style={{
          bottom: '10%',
          right: '5%'
        }} animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.4, 0.3]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
        </div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-blue-100 text-sm font-medium">
              Get Started Today
            </span>
          </motion.div>
          <AnimatedText text="Ready to Transform Your Business?" className="text-3xl md:text-4xl font-bold mb-6 text-white" />
          <motion.p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            Let's discuss how our innovative solutions can help you achieve your
            business goals.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <Link to="/contact" className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium inline-block transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Home;