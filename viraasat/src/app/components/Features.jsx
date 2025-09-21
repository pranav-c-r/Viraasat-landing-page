'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CircularGallery from './CircularGallery';
import Particles from './Particles';

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

// Function to create feature card images
const createFeatureImage = (icon, title, description, index) => {
  if (typeof document === 'undefined') return ''; // SSR safe
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 800;
  canvas.height = 600; 
  const gradients = [
  ['#3E2723', '#5D4037'], // Dark Espresso → Cocoa
  ['#4E342E', '#6D4C41'], // Coffee → Mocha
  ['#3B2F2F', '#5C4033'], // Dark Roast → Walnut
  ['#2C1B12', '#4B2E2E'], // Deep Brown → Mahogany
  ['#402218', '#603F2B'], // Chestnut → Dark Umber
  ['#2E1A12', '#4E342E']  // Bitter Chocolate → Coffee
];

  
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  const colors = gradients[index % gradients.length];
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 15; j++) {
      if ((i + j) % 2 === 0) {
        ctx.fillRect(i * 40, j * 40, 20, 20);
      }
    }
  }
  
  ctx.font = '120px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillText(icon, canvas.width / 2, canvas.height / 2 - 60);
  
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(title, canvas.width / 2, canvas.height / 2 + 80);
  
  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  const words = description.split(' ');
  let line = '';
  let y = canvas.height / 2 + 140;
  const maxWidth = canvas.width - 100;
  
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, canvas.width / 2, y);
      line = words[n] + ' ';
      y += 35;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, canvas.width / 2, y);
  
  return canvas.toDataURL();
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
        
        {/* Circular Gallery replacing the grid layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ height: '600px', position: 'relative' }}
        >
          <CircularGallery 
            items={features.map((feature, index) => ({
              image: createFeatureImage(feature.icon, feature.title, feature.description, index),
              text: feature.title
            }))}
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
          />
        </motion.div>
      </div>
    </section>
  );
}