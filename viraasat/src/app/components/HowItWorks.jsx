'use client';

import { useState, useEffect, useRef } from 'react';

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

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const steps = [
    {
      step: "01",
      title: "Download App",
      description: "Get the Viraasat app from App Store or Play Store. Free download, no subscription required.",
      icon: "📱",
      color: "from-amber-400 to-orange-500",
      culturalPattern: "🪷" // Lotus pattern symbolizing purity and new beginnings
    },
    {
      step: "02", 
      title: "Scan QR / Select Site",
      description: "Scan the QR code at heritage sites or choose from our digital catalog of locations.",
      icon: "📷",
      color: "from-emerald-400 to-teal-600",
      culturalPattern: "🪔" // Diya pattern symbolizing discovery and enlightenment
    },
    {
      step: "03",
      title: "Explore in AR",
      description: "Immerse yourself in history with guided AR tours, 3D reconstructions, and interactive content.",
      icon: "🔍",
      color: "from-purple-400 to-indigo-600",
      culturalPattern: "🏛️" // Architectural pattern symbolizing exploration
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start step animation sequence
          const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length);
          }, 3000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-4000"></div>
      </div>

      {/* Cultural pattern overlays */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-8xl opacity-20 animate-rotate-slow">🪷</div>
        <div className="absolute bottom-1/3 right-1/4 text-9xl opacity-20 animate-rotate-slow animation-delay-3000">🪔</div>
        <div className="absolute top-1/3 right-1/3 text-7xl opacity-20 animate-rotate-slow animation-delay-5000">🏛️</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Three simple steps to unlock immersive heritage experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute left-1/6 top-24 w-2/3 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-500 rounded-full opacity-30">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep + 1) * 33.33}%` }}
            ></div>
          </div>
          
          {steps.map((step, index) => (
            <SpotlightCard
              key={index}
              className={`bg-[#CEB392] backdrop-blur-sm border border-gray-200 text-center relative transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
              spotlightColor={
                index === 0 ? 'rgba(255, 255, 0, 0.7)' : 
                index === 1 ? 'rgba(255, 0, 0, 0.7)' : 
                'rgba(255, 165, 0, 0.7)'
              }
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Number with gradient and cultural pattern */}
              <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} text-background font-bold text-xl rounded-full mb-8 transform transition-all duration-500 ease-out ${activeStep === index ? 'scale-110 shadow-2xl' : 'scale-100'}`}>
                {step.step}
                {/* Cultural pattern overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
                  {step.culturalPattern}
                </div>
              </div>
              
              {/* Animated Icon */}
              <div className={`text-6xl mb-8 transform transition-all duration-500 ${activeStep === index ? 'scale-110' : 'scale-100'}`}>
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
              
              {/* Animated progress indicator for mobile */}
              <div className="md:hidden mt-6">
                <div className="flex justify-center space-x-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === index ? 'bg-primary w-6' : 'bg-borders'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        
        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SpotlightCard
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
            spotlightColor="rgba(255, 165, 0, 0.7)"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute top-4 right-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute bottom-4 left-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute bottom-4 right-4 text-3xl text-primary opacity-20">🪷</div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Start Exploring?</h3>
            <p className="text-text-secondary mb-8">
              Join thousands of history enthusiasts discovering heritage through AR
            </p>
            <button className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-background px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download Viraasat App
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}