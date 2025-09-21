'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Aurora from './Aurora';
import DotGrid from './DotGrid';

// -----------------------------
// Client-only CulturalParticles (fixed)
// -----------------------------
const CulturalParticles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  // Detect client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track window size
  useEffect(() => {
    if (!isClient) return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [isClient]);

  // Particle animation
  useEffect(() => {
    if (!isClient || !dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const culturalPatterns = [
      { shape: 'circle', symbol: '○' },
      { shape: 'square', symbol: '□' },
      { shape: 'wave', symbol: '~' },
      { shape: 'dot', symbol: '•' },
      { shape: 'triangle', symbol: '△' },
    ];

    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 0.5,
      direction: Math.random() * Math.PI * 2,
      pattern: culturalPatterns[Math.floor(Math.random() * culturalPatterns.length)],
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle) => {
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.y > dimensions.height) particle.y = 0;
        if (particle.y < 0) particle.y = dimensions.height;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#5D4037';
        ctx.font = `${particle.size}px serif`;
        ctx.fillText(particle.pattern.symbol, particle.x, particle.y);
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isClient, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
};

// -----------------------------
// Decorative cultural ornaments
// -----------------------------
const CulturalOrnament = ({ className }) => (
  <motion.div
    className={className}
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1.5, type: 'spring' }}
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
        d="M30,50 Q50,30 70,50 Q50,70 30,50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  </motion.div>
);

// -----------------------------
// Main Hero Component
// -----------------------------
export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isDemoHovered, setIsDemoHovered] = useState(false);

  const yHeading = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yButtons = useTransform(scrollY, [0, 500], [0, 200]);
  const yMockup = useTransform(scrollY, [0, 500], [0, 250]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={['#F28B82', '#FFF9C4', '#FFDAB9']}
          blend={0.5}
          amplitude={0.4}
          speed={0.5}
        />
      </div>

      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={3}
          gap={10}
          baseColor="#DDCBB0"
          activeColor="#C21807"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Animated background elements */}
      <CulturalParticles />

      {/* Decorative cultural ornaments */}
      <CulturalOrnament className="absolute top-10 left-5 w-20 h-20 text-[#5D4037]/20" />
      <CulturalOrnament className="absolute bottom-10 right-5 w-16 h-16 text-[#5D4037]/20" />
      <CulturalOrnament className="absolute top-20 right-10 w-12 h-12 text-[#5D4037]/20" />
      <CulturalOrnament className="absolute bottom-20 left-10 w-14 h-14 text-[#5D4037]/20" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h1
          style={{ y: yHeading }}
          className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Step into History.
          </motion.span>
          <motion.span
            className="block text-[#5D4037] mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience Culture in AR.
          </motion.span>
        </motion.h1>

        <motion.p
          style={{ y: yText }}
          className="text-xl md:text-2xl text-[#4E342E] mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Preserving heritage through immersive AR experiences. Discover ancient monuments,
          lost civilizations, and cultural treasures like never before.
        </motion.p>

        <motion.div
          style={{ y: yButtons }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button
            className="bg-[#5D4037] hover:bg-[#4E342E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all relative overflow-hidden group [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download App</span>
            <motion.div
              className="absolute inset-0 bg-[#3E2723] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>

          <motion.button
            className="border-2 border-[#5D4037] text-[#5D4037] hover:bg-[#5D4037] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all relative overflow-hidden group hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsDemoHovered(true)}
            onHoverEnd={() => setIsDemoHovered(false)}
          >
            <span className="relative z-10">Try Demo</span>
            <motion.div
              className="absolute inset-0 bg-[#5D4037] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>
        </motion.div>

        <motion.div
          style={{ y: yMockup, scale }}
          className="mt-16"
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setIsDemoHovered(true)}
          onHoverEnd={() => setIsDemoHovered(false)}
        >
          {/* Demo content can go here */}
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#4E342E]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
