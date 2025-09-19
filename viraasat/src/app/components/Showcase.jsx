'use client';

import { useState, useEffect, useRef } from 'react';

export default function Showcase() {
  const [activeSite, setActiveSite] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const sites = [
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "Experience the magnificent Mughal architecture in stunning detail",
      image: "🕌",
      era: "17th Century",
      culture: "Mughal Architecture",
      pattern: "🌺", // Floral pattern common in Mughal art
      color: "from-amber-400 to-orange-500"
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      description: "Explore the ancient Incan citadel with immersive AR reconstruction",
      image: "🏔️",
      era: "15th Century",
      culture: "Incan Civilization",
      pattern: "⛰️", // Mountain pattern representing the Andes
      color: "from-emerald-400 to-teal-600"
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      description: "Witness gladiatorial battles and Roman spectacles come to life",
      image: "🏟️",
      era: "1st Century",
      culture: "Ancient Roman",
      pattern: "⚔️", // Roman military symbolism
      color: "from-stone-400 to-stone-600"
    },
    {
      name: "Angkor Wat",
      location: "Cambodia",
      description: "Discover the largest religious monument in its full glory",
      image: "🛕",
      era: "12th Century",
      culture: "Khmer Empire",
      pattern: "☸️", // Buddhist symbolism
      color: "from-red-400 to-red-600"
    },
    {
      name: "Petra",
      location: "Jordan",
      description: "Walk through the rose-red city carved from sandstone cliffs",
      image: "🏛️",
      era: "4th Century BCE",
      culture: "Nabatean",
      pattern: "🏜️", // Desert landscape pattern
      color: "from-rose-400 to-rose-600"
    },
    {
      name: "Chichen Itza",
      location: "Mexico",
      description: "Learn about Mayan astronomy and architecture",
      image: "🗿",
      era: "9th Century",
      culture: "Maya Civilization",
      pattern: "🌞", // Mayan sun symbol
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <section ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-float animation-delay-4000"></div>
      </div>

      {/* Cultural pattern overlays */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-8xl opacity-20 animate-rotate-slow">🌺</div>
        <div className="absolute bottom-1/3 right-1/4 text-9xl opacity-20 animate-rotate-slow animation-delay-3000">⛰️</div>
        <div className="absolute top-1/3 right-1/3 text-7xl opacity-20 animate-rotate-slow animation-delay-5000">⚔️</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Heritage Sites Showcase
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore world-renowned heritage sites through immersive AR experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <div 
              key={index} 
              className={`bg-background rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${activeSite === index ? 'ring-4 ring-primary/30 scale-105' : ''}`}
              onClick={() => setActiveSite(activeSite === index ? null : index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image with gradient overlay */}
              <div className={`aspect-video relative flex items-center justify-center text-8xl bg-gradient-to-br ${site.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {site.image}
                </div>
                
                {/* Cultural pattern overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                  {site.pattern}
                </div>
                
                {/* Quick info badge */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-text-primary">
                  {site.era}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {site.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3 flex items-center">
                  <span className="mr-2">📍</span>
                  {site.location}
                </p>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {site.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-surface px-3 py-1 rounded-full text-text-secondary">
                    {site.culture}
                  </span>
                  
                  <button className="bg-primary hover:bg-primary/90 text-background px-4 py-2 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 flex items-center gap-2">
                    View in AR
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-background p-8 rounded-3xl max-w-2xl mx-auto shadow-lg border border-borders/10 relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute top-4 right-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute bottom-4 left-4 text-3xl text-primary opacity-20">🪷</div>
            <div className="absolute bottom-4 right-4 text-3xl text-primary opacity-20">🪷</div>
            
            <p className="text-text-secondary mb-6 text-lg">More heritage sites coming soon...</p>
            <button className="group border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
              Request a Site
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Interactive Preview Modal (concept) */}
        {activeSite !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-3xl max-w-2xl w-full p-8 relative">
              <button 
                className="absolute top-4 right-4 text-2xl text-text-secondary hover:text-primary transition-colors"
                onClick={() => setActiveSite(null)}
              >
                ✕
              </button>
              
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{sites[activeSite].image}</div>
                <h3 className="text-2xl font-bold text-text-primary">{sites[activeSite].name}</h3>
                <p className="text-primary">{sites[activeSite].location}</p>
              </div>
              
              <p className="text-text-secondary mb-6 text-center">
                {sites[activeSite].description}
              </p>
              
              <div className="flex justify-center gap-4">
                <button className="bg-primary text-background px-6 py-3 rounded-xl font-semibold">
                  Experience in AR
                </button>
                <button className="border border-borders text-text-primary px-6 py-3 rounded-xl font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}