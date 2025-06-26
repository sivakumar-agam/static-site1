import React, { useEffect, useState, useRef, Children } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, MousePointerIcon } from 'lucide-react';
import AnimatedText from './AnimatedText';
import GradientButton from './GradientButton';
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const {
    scrollY
  } = useScroll();
  // Parallax effect on scroll
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  // Mouse follow effect for the interactive circle
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorText, setCursorText] = useState('Explore');
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Initial animation sequence
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);
  return <div ref={containerRef} className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Background grid animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}>
          <motion.div className="w-full h-full" animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }} transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity
        }} />
        </div>
      </div>
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px]" style={{
        top: '-400px',
        left: '-200px'
      }} animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.7, 0.5]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <motion.div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[100px]" style={{
        bottom: '-200px',
        right: '-100px'
      }} animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <motion.div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[80px]" style={{
        top: '30%',
        left: '60%'
      }} animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
      </div>
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 10
      }).map((_, i) => <motion.div key={i} className="absolute border border-white/10" style={{
        width: 100 + Math.random() * 200,
        height: 100 + Math.random() * 200,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        borderRadius: Math.random() > 0.5 ? '50%' : `${Math.random() * 30}%`
      }} initial={{
        opacity: 0,
        scale: 0
      }} animate={{
        opacity: 0.05 + Math.random() * 0.1,
        scale: 1,
        rotate: [0, 360],
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50]
      }} transition={{
        duration: 20 + Math.random() * 30,
        repeat: Infinity,
        ease: 'linear',
        delay: i * 0.5
      }} />)}
      </div>
      {/* Interactive cursor follower */}
      <motion.div className="hidden lg:flex fixed w-24 h-24 rounded-full bg-white/5 backdrop-blur-md z-50 border border-white/20 items-center justify-center text-sm font-medium pointer-events-none" style={{
      left: mousePosition.x - 48,
      top: mousePosition.y - 48
    }} animate={{
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      scale: [1, 1.05, 1]
    }} transition={{
      type: 'spring',
      damping: 20,
      stiffness: 300,
      mass: 0.5
    }}>
        <motion.div animate={{
        rotate: [0, 360]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} className="absolute inset-0 rounded-full border border-white/10" />
        <MousePointerIcon size={16} className="mr-1" /> {cursorText}
      </motion.div>
      {/* Main content */}
      <motion.div className="container relative mx-auto px-4 pt-32 pb-40 md:py-40 z-10" style={{
      y,
      opacity
    }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div className="lg:col-span-7" initial={{
          opacity: 0,
          y: 30
        }} animate={controls}>
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="mb-4 inline-flex items-center py-1.5 px-4 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 text-transparent bg-clip-text text-sm font-medium">
                Pioneering Digital Excellence for 6+ Years
              </span>
              <motion.span className="ml-2 w-2 h-2 rounded-full bg-blue-400" animate={{
              scale: [1, 1.5, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} />
            </motion.div>
            <div className="mb-6">
              <AnimatedText text="Next-Generation" className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 text-transparent bg-clip-text" delay={0.1} />
              <AnimatedText text="Web & Mobile Solutions" className="text-5xl md:text-6xl font-bold leading-tight mb-2" delay={0.3} />
              <motion.div initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mb-6 origin-left" />
            </div>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="text-xl mb-8 text-blue-100">
              Delivering Excellence in Application Development with a focus on
              Speed, Performance, Security, and User Experience.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }}>
              <GradientButton to="/contact" variant="primary" className="px-8 py-4 text-base backdrop-blur-sm">
                Get a Free Consultation
              </GradientButton>
              <GradientButton to="/portfolio" variant="outline" icon={<ArrowRightIcon size={18} />} className="backdrop-blur-sm">
                View Our Portfolio
              </GradientButton>
            </motion.div>
            {/* Tech tags */}
            <motion.div className="flex flex-wrap gap-2 mt-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.9
          }}>
              {['React', 'Node.js', 'Flutter', 'AWS'].map((tech, i) => <motion.span key={tech} className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs border border-white/10" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1 + i * 0.1
            }} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              scale: 1.05
            }}>
                  {tech}
                </motion.span>)}
            </motion.div>
          </motion.div>
          {/* Right column - Visual elements */}
          <motion.div className="lg:col-span-5 relative" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.3
        }}>
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-70 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              {/* Main image with glass effect */}
              <motion.div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-xl border border-white/20 overflow-hidden" whileHover={{
              scale: 1.02
            }} transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10
            }} onMouseEnter={() => setCursorText('View Details')} onMouseLeave={() => setCursorText('Explore')}>
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Digital solutions visualization" className="w-full h-auto rounded-xl" />
                {/* Overlaid code effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-60 mix-blend-overlay"></div>
                {/* Animated code lines */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {Array.from({
                  length: 10
                }).map((_, i) => <motion.div key={i} className="absolute left-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" style={{
                  top: `${10 + i * 8}%`,
                  width: '100%'
                }} animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.2
                }} />)}
                </div>
              </motion.div>
              {/* Floating elements */}
              <motion.div className="absolute -right-6 -top-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg" animate={{
              y: [0, -15, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  R
                </div>
              </motion.div>
              <motion.div className="absolute -left-6 bottom-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg" animate={{
              y: [0, 15, 0]
            }} transition={{
              duration: 6,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  A
                </div>
              </motion.div>
              {/* Stats pill */}
              <motion.div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 shadow-lg" initial={{
              y: 50,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 1,
              duration: 0.8
            }}>
                <div className="flex gap-4 items-center text-sm">
                  <div>
                    <div className="text-white/60">Projects</div>
                    <div className="text-white font-bold">150+</div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div>
                    <div className="text-white/60">Clients</div>
                    <div className="text-white font-bold">50+</div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div>
                    <div className="text-white/60">Experience</div>
                    <div className="text-white font-bold">6+ Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <div className="flex flex-col items-center">
            <div className="text-xs text-white/50 mb-2">Scroll to explore</div>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
              <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{
              y: [0, 12, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export default Hero;