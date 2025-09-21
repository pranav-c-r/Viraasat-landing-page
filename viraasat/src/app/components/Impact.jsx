"use client";

import { useState, useEffect, useRef } from 'react';
import CountUp from './CountUp';
import SpotlightCard from './SpotlightCard';
import { Landmark, GraduationCap, Globe, Zap, Globe2, Handshake, Star } from 'lucide-react';

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    {
      number: "1000+",
      label: "Monuments Under Threat",
      description: "Historical sites facing deterioration worldwide",
      icon: <Landmark className="w-8 h-8 text-white" aria-hidden="true" />,
      color: "from-amber-500 to-orange-600",
      endValue: 1000,
      spotlightColor: "rgba(255, 255, 0, 0.7)"
    },
    {
      number: "50M+",
      label: "Students Reached",
      description: "Educational impact through digital preservation",
      icon: <GraduationCap className="w-8 h-8 text-white" aria-hidden="true" />,
      color: "from-emerald-500 to-teal-600",
      endValue: 50,
      spotlightColor: "rgba(255, 0, 0, 0.7)"
    },
    {
      number: "25+",
      label: "Languages Supported",
      description: "Making heritage accessible globally",
      icon: <Globe className="w-8 h-8 text-white" aria-hidden="true" />,
      color: "from-blue-500 to-indigo-600",
      endValue: 25,
      spotlightColor: "rgba(255, 165, 0, 0.7)"
    },
    {
      number: "95%",
      label: "User Engagement",
      description: "Students show increased interest in history",
      icon: <Zap className="w-8 h-8 text-white" aria-hidden="true" />,
      color: "from-purple-500 to-pink-600",
      endValue: 95,
      spotlightColor: "rgba(255, 255, 0, 0.7)"
    }
  ];
  
  const testimonials = [
    {
      quote: "Viraasat has revolutionized how we teach history. Students are more engaged than ever.",
      author: "Dr. Sarah Johnson",
      role: "History Professor, Oxford University",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      spotlightColor: "rgba(255, 0, 0, 0.7)"
    },
    {
      quote: "The AR experience brought our heritage tour to life. Visitors love the interactive elements.",
      author: "Raj Patel",
      role: "Tourism Director, Archaeological Survey",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      spotlightColor: "rgba(255, 165, 0, 0.7)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-4000"></div>
      </div>

      {/* Cultural pattern overlays */}
      <div className="absolute inset-0 opacity-10">
  <div className="absolute top-1/4 left-1/4 text-8xl opacity-20 animate-rotate-slow">🌸</div>
  <div className="absolute bottom-1/3 right-1/4 text-9xl opacity-20 animate-rotate-slow animation-delay-3000">🕯️</div>
  <div className="absolute top-1/3 right-1/3 text-7xl opacity-20 animate-rotate-slow animation-delay-5000">📜</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cultural preservation for future generations through innovative technology
          </p>
        </div>
        
        {/* Stats Grid with Counting Animation using SpotlightCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <SpotlightCard 
                className="text-center h-full border border-gray-200"
                style={{ backgroundColor: '#CEB392' }}
                spotlightColor={stat.spotlightColor}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl text-white`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {/* Use CountUp component to animate numbers reliably */}
                  {stat.number.includes('%') ? (
                    <>
                      <CountUp
                        to={stat.endValue}
                        duration={1.2}
                        className="inline-block"
                        separator={''}
                      />%
                    </>
                  ) : stat.number.includes('M+') ? (
                    <>
                      <CountUp to={stat.endValue} duration={1.2} className="inline-block" />M+
                    </>
                  ) : (
                    <>
                      <CountUp to={stat.endValue} duration={1.2} className="inline-block" />+
                    </>
                  )}
                </div>
                <div className="text-lg font-semibold text-black mb-2">{stat.label}</div>
                <div className="text-gray-700 text-sm">{stat.description}</div>
              </SpotlightCard>
            </div>
          ))}
        </div>
        
        {/* Mission Statement with SpotlightCard */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SpotlightCard 
            className="relative overflow-hidden border border-gray-200"
            style={{ backgroundColor: '#CEB392' }}
            spotlightColor="rgba(255, 165, 0, 0.7)"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-3xl text-primary opacity-20">🌸</div>
            <div className="absolute top-4 right-4 text-3xl text-primary opacity-20">🌸</div>
            <div className="absolute bottom-4 left-4 text-3xl text-primary opacity-20">🌸</div>
            <div className="absolute bottom-4 right-4 text-3xl text-primary opacity-20">🌸</div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h3 className="text-2xl font-bold text-black mb-6">Our Impact</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Viraasat bridges the gap between ancient heritage and modern technology, ensuring that 
                cultural treasures remain accessible to students, tourists, researchers, and future 
                generations. By preserving these sites digitally, we're safeguarding human history 
                against time, weather, and other threats.
              </p>
            </div>
          </SpotlightCard>
        </div>
        
        {/* Testimonials with SpotlightCards */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <SpotlightCard 
              key={index}
              className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-gray-200"
              style={{ backgroundColor: '#CEB392' }}
              spotlightColor={testimonial.spotlightColor}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-4 text-6xl text-primary opacity-10">❝</div>
              
              <p className="text-gray-700 italic mb-6 text-lg relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="text-3xl mr-4 bg-primary/10 p-3 rounded-full w-12 h-12 overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.author}</div>
                  <div className="text-primary text-sm">{testimonial.role}</div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Additional Impact Visualization */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-text-primary mb-6">Global Reach</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <SpotlightCard 
              className="flex items-center px-4 py-2 border border-gray-200"
              style={{ backgroundColor: '#CEB392' }}
              spotlightColor="rgba(255, 255, 0, 0.7)"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-amber-500 text-white">
                <Globe2 className="w-4 h-4" />
              </span>
              <span className="font-semibold">45+ Countries</span>
            </SpotlightCard>
            <SpotlightCard 
              className="flex items-center px-4 py-2 border border-gray-200"
              style={{ backgroundColor: '#CEB392' }}
              spotlightColor="rgba(255, 0, 0, 0.7)"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-emerald-500 text-white">
                <Handshake className="w-4 h-4" />
              </span>
              <span className="font-semibold">120+ Partners</span>
            </SpotlightCard>
            <SpotlightCard 
              className="flex items-center px-4 py-2 border border-gray-200"
              style={{ backgroundColor: '#CEB392' }}
              spotlightColor="rgba(255, 165, 0, 0.7)"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-rose-500 text-white">
                <Star className="w-4 h-4" />
              </span>
              <span className="font-semibold">4.9/5 Rating</span>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}