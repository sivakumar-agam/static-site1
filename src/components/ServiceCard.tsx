import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}
const ServiceCard = ({
  icon,
  title,
  description,
  link,
  delay = 0
}: ServiceCardProps) => {
  return <motion.div className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/20" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} viewport={{
    once: true
  }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/95 group-hover:from-white/90 group-hover:to-blue-100/90 transition-all duration-300"></div>
      {/* Border glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[2px]"></div>
      </div>
      {/* Content */}
      <div className="relative p-8 z-10">
        <motion.div className="text-blue-600 mb-6 p-3 bg-blue-50 rounded-xl inline-block" whileHover={{
        rotate: [0, -10, 10, -10, 0]
      }} transition={{
        duration: 0.5
      }}>
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          <span>Learn More</span>
          <motion.span className="ml-1 inline-block" initial={{
          x: 0
        }} whileHover={{
          x: 5
        }} transition={{
          type: 'spring',
          stiffness: 400
        }}>
            <ArrowRightIcon size={16} />
          </motion.span>
        </Link>
      </div>
      {/* Shimmering effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg] animate-[shine_3s_ease-in-out_infinite]"></div>
      </div>
    </motion.div>;
};
export default ServiceCard;