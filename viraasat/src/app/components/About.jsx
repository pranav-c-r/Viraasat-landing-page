'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Particles from './Particles';
import { AnimatePresence } from 'framer-motion'; // Import from framer-motion instead of redefining

// Cultural pattern background component
const CulturalPatternBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="about-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0,0 L80,80 M80,0 L0,80" stroke="currentColor" strokeWidth="1"/>
          <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="20" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#about-pattern)" />
      </svg>
    </div>
  );
};

// Animated decorative element
const CulturalOrnament = ({ className, delay = 0 }) => {
  return (
    <motion.div 
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ delay, duration: 0.7, type: "spring" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path 
          d="M30,30 L70,30 L70,70 L30,70 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
      </svg>
    </motion.div>
  );
};

// Animated video placeholder with play button
const MissionVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 5000); // Simulate video ending
  };
  
  return (
    <motion.div 
      className="bg-background p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: 0.4 }}
      whileHover={{ 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Cultural pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="video-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="30" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#video-pattern)" />
        </svg>
      </div>
      
      <div className="aspect-square bg-borders/20 rounded-lg flex items-center justify-center relative overflow-hidden">
        <AnimatePresence>
          {!isPlaying ? (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handlePlay}
            >
              <motion.div
                className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 90, 43, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-8 h-8 text-background" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              className="absolute inset-0 bg-primary/5 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-lg font-semibold"
              >
                Experience in AR
              </motion.div>
              
              {/* Animated scanning effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-primary"
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'loop', 
                  duration: 3, 
                  ease: 'easeInOut' 
                }}
                style={{ boxShadow: '0 0 10px 2px rgba(139, 90, 43, 0.5)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.span 
          className="text-text-secondary"
          animate={{ opacity: isPlaying ? 0.3 : 1 }}
        >
          Mission Video/Animation
        </motion.span>
      </div>
    </motion.div>
  );
};

// Text content with staggered animation
const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-text-primary mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The Challenge
      </motion.h3>
      
      <motion.p 
        className="text-text-secondary mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Historical sites are deteriorating, stories are being forgotten, and access 
        to cultural heritage is limited by geography, time, and resources.
      </motion.p>
      
      <motion.h3 
        className="text-2xl font-bold text-text-primary mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Solution
      </motion.h3>
      
      <motion.p 
        className="text-text-secondary"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Viraasat uses cutting-edge AR technology to bring history to life, creating 
        immersive experiences that preserve and share cultural heritage with future generations.
      </motion.p>
      
      {/* Animated stats */}
      <motion.div 
        className="grid grid-cols-3 gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {[
          { number: "50+", label: "Heritage Sites" },
          { number: "100K+", label: "Users" },
          { number: "15+", label: "Languages" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center p-4 bg-background/50 rounded-lg border border-white/10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl font-bold text-primary">{stat.number}</div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      {/* Particles Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Particles
          particleColors={['#940000', '#940000', '#940000']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Cultural pattern background */}
      <CulturalPatternBg />
      
      {/* Cultural decorative elements */}
      <CulturalOrnament className="absolute top-10 left-5 w-20 h-20 text-primary/10" delay={0.2} />
      <CulturalOrnament className="absolute bottom-10 right-5 w-16 h-16 text-primary/10" delay={0.4} />
      <CulturalOrnament className="absolute top-20 right-10 w-12 h-12 text-primary/10" delay={0.3} />
      <CulturalOrnament className="absolute bottom-20 left-10 w-14 h-14 text-primary/10" delay={0.5} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Viraasat
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our mission is to digitize and preserve cultural heritage, making it accessible 
            to everyone through immersive AR technology.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isInView ? "visible" : ""}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <AboutContent />
          <MissionVideo />
        </motion.div>
      </div>
    </section>
  );
}