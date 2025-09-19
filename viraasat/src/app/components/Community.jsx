'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Cultural decorative element component
const CulturalDecoration = ({ className, delay = 0 }) => {
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

// Animated icon component
const AnimatedAudienceIcon = ({ icon, index }) => {
  return (
    <motion.div 
      className="text-6xl mb-6 text-center p-4 rounded-full bg-primary/10 relative"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ 
        delay: index * 0.2, 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {icon}
      {/* Decorative cultural elements around icon */}
      <motion.div 
        className="absolute -inset-4 rounded-full border-2 border-primary/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
      />
    </motion.div>
  );
};

// Feature list item with staggered animation
const FeatureListItem = ({ feature, index }) => {
  return (
    <motion.li 
      className="flex items-center text-text-secondary"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <motion.span 
        className="text-primary mr-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
      >
        ✓
      </motion.span>
      {feature}
    </motion.li>
  );
};

// Audience card component
const AudienceCard = ({ audience, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-surface/80 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Subtle cultural pattern overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id={`community-pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.1"/>
            <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#community-pattern-${index})`} />
        </svg>
      </div>
      
      {/* Animated border effect on hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
      </div>
      
      <AnimatedAudienceIcon icon={audience.icon} index={index} />
      
      <motion.h3 
        className="text-2xl font-bold text-text-primary mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
      >
        {audience.title}
      </motion.h3>
      
      <motion.p 
        className="text-text-secondary mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        {audience.description}
      </motion.p>
      
      {/* Features List */}
      <ul className="space-y-2 mb-8">
        {audience.features.map((feature, featureIndex) => (
          <FeatureListItem key={featureIndex} feature={feature} index={featureIndex} />
        ))}
      </ul>
      
      {/* CTA Button */}
      <motion.button 
        className="w-full bg-primary hover:bg-primary/90 text-background py-3 rounded-lg font-semibold transition-all relative overflow-hidden group"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{audience.cta}</span>
        <motion.div 
          className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      </motion.button>
    </motion.div>
  );
};

// Partnership section component
const PartnershipSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  
  return (
    <motion.div 
      ref={sectionRef}
      className="mt-16 bg-surface/80 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      {/* Cultural pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="partnership-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0,0 L60,60 M60,0 L0,60" stroke="currentColor" strokeWidth="1"/>
            <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#partnership-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h3 
          className="text-3xl font-bold text-text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Partner with Viraasat
        </motion.h3>
        
        <motion.p 
          className="text-text-secondary text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Join museums, tourism boards, and educational institutions in preserving and sharing cultural heritage. 
          Together, we can make history accessible to everyone.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.button 
            className="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
          
          <motion.button 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Community() {
  const audiences = [
    {
      title: "Schools & Universities",
      description: "Transform history education with immersive AR experiences that bring textbooks to life",
      features: ["Curriculum integration", "Interactive assignments", "Virtual field trips", "Progress tracking"],
      icon: "🎓",
      cta: "Partner with Us"
    },
    {
      title: "Tourists & Travelers", 
      description: "Enhance your heritage site visits with guided AR tours and historical reconstructions",
      features: ["Self-guided tours", "Multilingual support", "Offline accessibility", "Photo opportunities"],
      icon: "✈️",
      cta: "Download App"
    },
    {
      title: "Local Communities",
      description: "Preserve and share your cultural heritage with the world through digital storytelling",
      features: ["Community contributions", "Local storytelling", "Cultural preservation", "Tourism boost"],
      icon: "🏘️",
      cta: "Share Your Story"
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Cultural decorative elements */}
      <CulturalDecoration className="absolute top-10 left-5 w-24 h-24 text-primary/10" delay={0.2} />
      <CulturalDecoration className="absolute bottom-10 right-5 w-20 h-20 text-primary/10" delay={0.4} />
      <CulturalDecoration className="absolute top-20 right-10 w-16 h-16 text-primary/10" delay={0.3} />
      <CulturalDecoration className="absolute bottom-20 left-10 w-18 h-18 text-primary/10" delay={0.5} />
      
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
            Community & Education
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Viraasat serves diverse communities united by a passion for heritage and culture
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
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
          {audiences.map((audience, index) => (
            <AudienceCard key={index} audience={audience} index={index} />
          ))}
        </motion.div>
        
        <PartnershipSection />
      </div>
    </section>
  );
}