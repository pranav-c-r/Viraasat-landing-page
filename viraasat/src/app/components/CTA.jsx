'use client';

import { useEffect, useRef, useState } from 'react';

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
          <button className="group bg-background hover:bg-background/90 text-primary px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📱</span>
            <span>Download for iOS</span>
            <span className="absolute -right-4 -top-4 w-20 h-20 bg-amber-300/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
          </button>
          
          <button className="group bg-background hover:bg-background/90 text-primary px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🤖</span>
            <span>Download for Android</span>
            <span className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-300/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
          </button>
        </div>
        
        {/* Additional CTAs with glassmorphism effect */}
        <div className={`grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-background/10 backdrop-blur-xl p-8 rounded-2xl border border-background/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:bg-background/15">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
              🎭
            </div>
            <h3 className="text-2xl font-bold text-background mb-3">Try Our Demo</h3>
            <p className="text-background/80 mb-6">Experience AR heritage tours without downloading</p>
            <button className="group relative border-2 border-background text-background hover:bg-background hover:text-primary px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Launch Demo</span>
              <span className="absolute inset-0 bg-background transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
            </button>
          </div>
          
          <div className="bg-background/10 backdrop-blur-xl p-8 rounded-2xl border border-background/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:bg-background/15">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
              ✉️
            </div>
            <h3 className="text-2xl font-bold text-background mb-3">Stay Updated</h3>
            <p className="text-background/80 mb-6">Get notified about new heritage sites and features</p>
            <button className="group relative border-2 border-background text-background hover:bg-background hover:text-primary px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Subscribe</span>
              <span className="absolute inset-0 bg-background transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
            </button>
          </div>
        </div>
        
        {/* Trust Indicators with animated logos */}
        <div className={`mt-20 pt-10 border-t border-background/20 transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-background/70 mb-8 text-lg">Trusted by cultural institutions worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-10 text-background/80">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 bg-background/10 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                🏛️
              </div>
              <span className="text-sm font-medium">UNESCO</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 bg-background/10 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                🏫
              </div>
              <span className="text-sm font-medium">Harvard University</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 bg-background/10 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                🏛️
              </div>
              <span className="text-sm font-medium">British Museum</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 bg-background/10 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <span className="text-sm font-medium">Tourism Boards</span>
            </div>
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