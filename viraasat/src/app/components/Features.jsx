'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Cultural pattern background component
const CulturalPatternBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="cultural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#cultural-pattern)" />
      </svg>
    </div>
  );
};

// Animated icon component with cultural motifs
const AnimatedIcon = ({ icon, index }) => {
  return (
    <motion.div 
      className="relative text-5xl mb-4 p-4 rounded-full bg-primary/10"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.2, 
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {icon}
      {/* Decorative cultural elements */}
      <motion.div 
        className="absolute -inset-4 rounded-full border-2 border-primary/30 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      />
    </motion.div>
  );
};

// Feature card component with elegant animations
const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-surface/80 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Subtle cultural pattern overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id={`pattern-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.1"/>
            <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${index})`} />
        </svg>
      </div>
      
      {/* Animated border effect on hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
      </div>
      
      <AnimatedIcon icon={feature.icon} index={index} />
      
      <motion.h3 
        className="text-xl font-bold text-text-primary mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {feature.title}
      </motion.h3>
      
      <motion.p 
        className="text-text-secondary"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {feature.description}
      </motion.p>
      
      {/* Subtle reveal effect on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      title: "AR Guided Tours",
      description: "Immersive guided experiences through historical sites with interactive storytelling",
      icon: "🏛️"
    },
    {
      title: "Offline-First",
      description: "Low-bandwidth friendly technology that works even without internet connectivity",
      icon: "📱"
    },
    {
      title: "Multilingual Support",
      description: "Narration and subtitles available in multiple languages for global accessibility",
      icon: "🌍"
    },
    {
      title: "3D Models",
      description: "Detailed 3D reconstructions and immersive storytelling experiences",
      icon: "🏗️"
    },
    {
      title: "Gamification",
      description: "Engaging features like badges, quizzes, and achievement systems",
      icon: "🎮"
    },
    {
      title: "Educational Tools",
      description: "Specially designed features for students, teachers, and researchers",
      icon: "📚"
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Cultural pattern background */}
      <CulturalPatternBg />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-5 w-24 h-24 text-primary/10">
        <svg viewBox="0 0 100 100">
          <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
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
            Key Features
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Discover what makes Viraasat the perfect platform for experiencing cultural heritage
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : ""}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}