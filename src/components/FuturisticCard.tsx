import React from 'react';
import { motion } from 'framer-motion';
interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}
const FuturisticCard = ({
  children,
  className = '',
  delay = 0,
  hoverEffect = true
}: FuturisticCardProps) => {
  return <motion.div className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-white to-blue-50 ${hoverEffect ? 'group' : ''} ${className}`} initial={{
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
      {/* Border glow effect */}
      <div className={`absolute inset-0 rounded-xl ${hoverEffect ? 'opacity-0 group-hover:opacity-100' : 'opacity-50'} transition-opacity duration-500`}>
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[2px]"></div>
      </div>
      {/* Glass morphism effect */}
      <div className="relative rounded-xl h-full backdrop-blur-sm p-6 z-10">
        {children}
      </div>
      {/* Hover shine effect */}
      {hoverEffect && <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg] animate-[shine_3s_ease-in-out_infinite]"></div>
        </div>}
    </motion.div>;
};
export default FuturisticCard;