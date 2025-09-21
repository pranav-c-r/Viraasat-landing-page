'use client';

import { useEffect, useRef, useState } from 'react';

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

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startParticleAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startParticleAnimation = () => {
    // Particle animation implementation would go here
    // This would create traditional motif-inspired particles floating gently
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-primary overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-4000"></div>
      </div>

      {/* Decorative cultural patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[url('/api/placeholder/40/40')] bg-repeat animate-rotate-slow"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[url('/api/placeholder/40/40')] bg-repeat animate-rotate-slow animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className={`text-5xl md:text-6xl font-bold text-background mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Ready to Explore Heritage Like Never Before?
        </h2>
        
        <p className={`text-xl text-background/90 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 ease-out delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Join millions of users discovering cultural treasures through immersive AR experiences. 
          Download Viraasat today and step into history.
        </p>
        
        {/* Download Buttons with enhanced animations */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SpotlightCard
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 group hover:shadow-3xl transition-all duration-500"
            spotlightColor="rgba(255, 255, 0, 0.7)"
          >
            <button className="w-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 relative overflow-hidden text-primary">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📱</span>
              <span>Download for iOS</span>
              <span className="absolute -right-4 -top-4 w-20 h-20 bg-amber-300/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
            </button>
          </SpotlightCard>
          
          <SpotlightCard
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 group hover:shadow-3xl transition-all duration-500"
            spotlightColor="rgba(255, 0, 0, 0.7)"
          >
            <button className="w-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 relative overflow-hidden text-primary">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🤖</span>
              <span>Download for Android</span>
              <span className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-300/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
            </button>
          </SpotlightCard>
        </div>
        
        {/* Additional CTAs with SpotlightCard effect */}
        <div className={`grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SpotlightCard 
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 text-center group hover:shadow-3xl transition-all duration-500"
            spotlightColor="rgba(255, 165, 0, 0.7)"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
              🎭
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">Try Our Demo</h3>
            <p className="text-text-secondary mb-6">Experience AR heritage tours without downloading</p>
            <button className="group relative border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Launch Demo</span>
              <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
            </button>
          </SpotlightCard>
          
          <SpotlightCard 
            className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 text-center group hover:shadow-3xl transition-all duration-500"
            spotlightColor="rgba(255, 255, 0, 0.7)"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
              ✉️
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">Stay Updated</h3>
            <p className="text-text-secondary mb-6">Get notified about new heritage sites and features</p>
            <button className="group relative border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Subscribe</span>
              <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
            </button>
          </SpotlightCard>
        </div>
        
        {/* Trust Indicators with SpotlightCard effects */}
        <div className={`mt-20 pt-10 border-t border-background/20 transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-background/70 mb-8 text-lg">Trusted by cultural institutions worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-text-primary">
            <SpotlightCard 
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 flex flex-col items-center group py-4 px-6"
              spotlightColor="rgba(255, 255, 0, 0.7)"
            >
              <div className="w-12 h-12 mb-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                🏛️
              </div>
              <span className="text-sm font-medium">UNESCO</span>
            </SpotlightCard>
            
            <SpotlightCard 
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 flex flex-col items-center group py-4 px-6"
              spotlightColor="rgba(255, 0, 0, 0.7)"
            >
              <div className="w-12 h-12 mb-2 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                🏫
              </div>
              <span className="text-sm font-medium">Harvard University</span>
            </SpotlightCard>
            
            <SpotlightCard 
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 flex flex-col items-center group py-4 px-6"
              spotlightColor="rgba(255, 165, 0, 0.7)"
            >
              <div className="w-12 h-12 mb-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                🏛️
              </div>
              <span className="text-sm font-medium">British Museum</span>
            </SpotlightCard>
            
            <SpotlightCard 
              className="bg-[#CEB392] backdrop-blur-sm border border-gray-200 flex flex-col items-center group py-4 px-6"
              spotlightColor="rgba(255, 255, 0, 0.7)"
            >
              <div className="w-12 h-12 mb-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <span className="text-sm font-medium">Tourism Boards</span>
            </SpotlightCard>
          </div>
        </div>
      </div>

      {/* Canvas for particle effects */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
    </section>
  );
}