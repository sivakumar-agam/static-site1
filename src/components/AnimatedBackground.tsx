import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}
const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    generateParticles();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const generateParticles = () => {
    const particlesArray: Particle[] = [];
    const colors = ['#3b82f6', '#1d4ed8', '#2563eb', '#60a5fa', '#93c5fd', '#0284c7'];
    for (let i = 0; i < 30; i++) {
      particlesArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 20
      });
    }
    setParticles(particlesArray);
  };
  return <div className="fixed inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
      {particles.map(particle => <motion.div key={particle.id} className="absolute rounded-full" style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
      backgroundColor: particle.color,
      filter: 'blur(3px)'
    }} animate={{
      x: [Math.random() * windowSize.width * 0.2, Math.random() * windowSize.width * -0.2, Math.random() * windowSize.width * 0.2],
      y: [Math.random() * windowSize.height * 0.2, Math.random() * windowSize.height * -0.2, Math.random() * windowSize.height * 0.2],
      opacity: [0.4, 0.8, 0.4]
    }} transition={{
      duration: particle.duration,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />)}
    </div>;
};
export default AnimatedBackground;