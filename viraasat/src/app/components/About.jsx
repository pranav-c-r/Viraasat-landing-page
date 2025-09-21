'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  AlertTriangle,
  Lightbulb,
  Camera,
  Zap,
  Smartphone,
  Mic,
  Rocket,
  Luggage,
  GraduationCap,
  BookOpen,
  Landmark,
  Globe
} from 'lucide-react';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)', style = {} }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 overflow-hidden p-8 ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      {children}
    </div>
  );
};

// Heritage Monument Interactive Component
const HeritageMonument = ({ monument, delay = 0, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover?.(monument);
      }}
      onHoverEnd={() => setIsHovered(false)}
    >
      <SpotlightCard
        className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 h-32 w-32 flex items-center justify-center overflow-hidden rounded-2xl transform transition-all duration-300"
        spotlightColor="rgba(255, 165, 0, 0.7)"
      >
        {monument.imageUrl ? (
          <motion.img
            src={monument.imageUrl}
            alt={monument.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
              rotate: isHovered ? 3 : 0
            }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        ) : (
          <motion.div
            className="text-4xl transform transition-all duration-300"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0
            }}
          >
            {monument.icon}
          </motion.div>
        )}
        
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-background px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 10 }}
          animate={{ y: isHovered ? 0 : 10 }}
        >
          {monument.name}
        </motion.div>
      </SpotlightCard>
    </motion.div>
  );
};

// Interactive Timeline Component
const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-yellow-500" />,
      title: "Digitize",
      description: "Create lightweight 3D models using photogrammetry and handcrafted modeling",
      color: "rgba(255, 255, 0, 0.7)"
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Optimize", 
      description: "Smart compression ensures smooth performance under 10MB per preview",
      color: "rgba(255, 0, 0, 0.7)"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "Experience Offline",
      description: "Progressive downloads and local caching work anywhere—even with patchy connectivity",
      color: "rgba(255, 165, 0, 0.7)"
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-500" />,
      title: "Storytelling First",
      description: "Multilingual narratives woven into each AR experience",
      color: "rgba(255, 255, 0, 0.7)"
    }
  ];

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="relative"
          onHoverStart={() => setActiveStep(index)}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <SpotlightCard
            className={`bg-[#CEB392] backdrop-blur-sm border border-gray-200 p-6 transform transition-all duration-500 ${
              activeStep === index ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
            spotlightColor={step.color}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="text-3xl"
                animate={{ 
                  scale: activeStep === index ? 1.2 : 1,
                  rotate: activeStep === index ? 360 : 0
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-text-primary mb-2">{step.title}</h4>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
};

// Interactive Stats Counter
const StatCounter = ({ end, label, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = end / (duration * 60);
        const counter = setInterval(() => {
          setCount(prev => {
            const next = prev + increment;
            if (next >= end) {
              clearInterval(counter);
              return end;
            }
            return next;
          });
        }, 1000 / 60);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, end, duration, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary">
        {Math.floor(count)}{label.includes('+') ? '+' : ''}
      </div>
      <div className="text-sm text-text-secondary mt-1">{label}</div>
    </div>
  );
};

// Mouse Follower Component
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="w-full h-full bg-primary rounded-full" />
    </motion.div>
  );
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [selectedMonument, setSelectedMonument] = useState(null);
  
  const monuments = [
    {
      name: "Red Fort",
      imageUrl: "https://images.pexels.com/photos/33928936/pexels-photo-33928936.jpeg"
    },
    {
      name: "Taj Mahal",
      imageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg"
    },
    {
      name: "Gateway of India",
      imageUrl: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Mysore Palace",
      imageUrl: "https://images.pexels.com/photos/17353476/pexels-photo-17353476.jpeg"
    },
    {
      name: "Ajanta Caves",
      imageUrl: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const userGroups = [
    {
      icon: "🧳",
      title: "Tourists",
      description: "Richer experiences on-site and off-site",
      color: "rgba(255, 255, 0, 0.7)"
    },
    {
      icon: "🎓", 
      title: "Students & Teachers",
      description: "Engaging cultural learning experiences",
      color: "rgba(255, 0, 0, 0.7)"
    },
    {
      icon: "📚",
      title: "Local Storytellers",
      description: "Platform for authentic narratives",
      color: "rgba(255, 165, 0, 0.7)"
    },
    {
      icon: "🏛️",
      title: "Institutions",
      description: "Tourism boards keeping heritage alive",
      color: "rgba(255, 255, 0, 0.7)"
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
      <MouseFollower />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-4000"></div>
      </div>

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="heritage-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#heritage-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Statement */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-text-primary mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Reimagine India's{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Monuments
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-text-secondary max-w-4xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Through augmented reality—making history immersive, accessible, and unforgettable.
          </motion.p>

          {/* Interactive Heritage Icons */}
          <motion.div 
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {monuments.map((monument, index) => (
              <HeritageMonument
                key={index}
                monument={monument}
                delay={0.8 + index * 0.1}
                onHover={setSelectedMonument}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Problem & Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SpotlightCard
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 h-full"
              spotlightColor="rgba(255, 0, 0, 0.7)"
            >
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-yellow-600 shrink-0" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-text-primary">The Problem</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  India's heritage is timeless—but time isn't always kind to it. Monuments erode, 
                  stories get lost in translation, and many people—especially in bandwidth-constrained 
                  regions—never get to experience these treasures meaningfully.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Right now, heritage feels distant, either locked behind textbooks or reduced to static photos.
                </p>
              </div>

              {/* Problem Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">70%</div>
                  <div className="text-xs text-red-500">Sites at Risk</div>
                </div>
                <div className="text-center p-3 bg-orange-100 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">50%</div>
                  <div className="text-xs text-orange-500">Stories Lost</div>
                </div>
                <div className="text-center p-3 bg-yellow-100 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">85%</div>
                  <div className="text-xs text-yellow-500">Limited Access</div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SpotlightCard
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 h-full"
              spotlightColor="rgba(255, 165, 0, 0.7)"
            >
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-10 h-10 text-amber-500 shrink-0" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-text-primary">Our Solution</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  We're building a <strong>low-bandwidth, offline-first AR platform</strong> that lets people 
                  explore India's cultural sites through immersive 3D storytelling.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Instead of tech gimmicks, we focus on <strong>accessibility and narrative depth</strong>. 
                  Even with limited internet, users can dive into compressed 3D reconstructions, listen to 
                  multilingual narrations, and enjoy guided AR tours.
                </p>
              </div>

              {/* Solution Features */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="flex items-center gap-2 p-2 bg-green-100 rounded-lg">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">Offline-First</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-100 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-xs text-blue-600 font-medium">Multilingual</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-purple-100 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-xs text-purple-600 font-medium">Lightweight</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-pink-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-pink-600" />
                  <span className="text-xs text-pink-600 font-medium">Story-Rich</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* How It Works Process */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">How It Works</h2>
            <p className="text-xl text-text-secondary">Our four-step process to preserve heritage</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ProcessTimeline />
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Who We Serve</h2>
            <p className="text-xl text-text-secondary">Connecting diverse communities with heritage</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 text-center h-full"
                  spotlightColor={group.color}
                >
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{group.title}</h3>
                  <p className="text-sm text-text-secondary">{group.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Stats */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 max-w-4xl mx-auto"
            spotlightColor="rgba(255, 255, 0, 0.7)"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-4xl">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Our Vision</h2>
            </div>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              This isn't AR for the sake of AR. It's a <strong>digital bridge between India's past and its future.</strong> 
              We begin with five iconic heritage sites, but our journey expands toward dozens more, alongside 
              features like VR museum tie-ins and a contributor-driven storytelling marketplace.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8">
              <StatCounter end={5} label="Heritage Sites" delay={0.2} />
              <StatCounter end={15} label="Languages" delay={0.4} />
              <StatCounter end={100} label="Stories+" delay={0.6} />
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}