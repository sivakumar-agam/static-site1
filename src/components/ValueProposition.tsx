import React from 'react';
import { RocketIcon, BarChartIcon, SmartphoneIcon, ZapIcon, BrainIcon, LayoutIcon, DollarSignIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import FuturisticCard from './FuturisticCard';
import AnimatedText from './AnimatedText';
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
const ValueCard = ({
  icon,
  title,
  description,
  index
}: ValueCardProps) => {
  return <FuturisticCard delay={0.1 * index}>
      <motion.div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4" whileHover={{
      y: -5
    }} transition={{
      type: 'spring',
      stiffness: 400
    }}>
        {icon}
      </motion.div>
      <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </FuturisticCard>;
};
const ValueProposition = () => {
  const values = [{
    icon: <RocketIcon size={24} />,
    title: 'Innovation at Speed & Scale',
    description: 'We deliver innovative solutions quickly and efficiently, helping your business stay ahead of the competition.'
  }, {
    icon: <BarChartIcon size={24} />,
    title: 'Data-Driven Decisions',
    description: 'Our approach is rooted in data analysis, ensuring that every decision is backed by solid insights.'
  }, {
    icon: <SmartphoneIcon size={24} />,
    title: 'Leading in Mobile Computing',
    description: 'We excel in creating cutting-edge mobile applications that provide seamless experiences across all platforms.'
  }, {
    icon: <ZapIcon size={24} />,
    title: 'Game-Changing UX',
    description: 'We create intuitive and captivating user experiences that keep your customers engaged and satisfied.'
  }, {
    icon: <BrainIcon size={24} />,
    title: 'Real-World Decisions',
    description: 'We combine technical expertise with practical business knowledge to deliver solutions that work in the real world.'
  }, {
    icon: <LayoutIcon size={24} />,
    title: 'Infrastructure Excellence',
    description: 'We build and manage robust infrastructure that supports your business needs and future growth.'
  }, {
    icon: <DollarSignIcon size={24} />,
    title: 'Cost-Effective Scaling',
    description: 'Our solutions are designed to grow with your business while keeping costs under control.'
  }];
  return <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50/50"></div>
      <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.05) 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }}></div>
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
              Why Choose Us
            </span>
          </motion.div>
          <AnimatedText text="Why Choose AgamWorks" className="text-3xl font-bold mb-4 text-gray-800" />
          <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            With 6+ years of experience, we deliver innovative and custom-built
            solutions that drive your business forward.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} index={index} />)}
        </div>
      </div>
    </section>;
};
export default ValueProposition;