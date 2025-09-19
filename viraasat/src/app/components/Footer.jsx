'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Heritage Sites", href: "#showcase" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" }
  ];
  
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" }
  ];
  
  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "YouTube", href: "#", icon: "📺" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Twitter", href: "#", icon: "🐦" }
  ];

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'es', name: 'Spanish', native: 'Español' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'de', name: 'German', native: 'Deutsch' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer className="bg-surface border-t border-borders relative overflow-hidden">
      {/* Decorative cultural pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAxMEMxMy4zMTM3IDEwIDE2IDcuMzEzNzEgMTYgNEMxNiAwLjY4NjI5MSAxMy4zMTM3IC0yIDEwIC0yQzYuNjg2MjkgLTIgNCAwLjY4NjI5MSA0IDRDNCA3LjMxMzcxIDYuNjg2MjkgMTAgMTAgMTBaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTMwIDMwQzMzLjMxMzcgMzAgMzYgMjcuMzEzNyAzNiAyNEMzNiAyMC42ODYzIDMzLjMxMzcgMTggMzAgMThDMjYuNjg2MyAxOCAyNCAyMC42ODYzIDI0IDI0QzI0IDI3LjMxMzcgMjYuNjg2MyAzMCAzMCAzMFoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] bg-repeat animate-rotate-slow"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAyMEMyMi4yMDkxIDIwIDI0IDE4LjIwOTEgMjQgMTZDMjQgMTMuNzkwOSAyMi4yMDkxIDEyIDIwIDEyQzE3Ljc5MDkgMTIgMTYgMTMuNzkwOSAxNiAxNkMxNiAxOC4yMDkxIDE3Ljc5MDkgMjAgMjAgMjBaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzIgMzJDMzMuMTA0NiAzMiAzNCAzMS4xMDQ2IDM0IDMwQzM0IDI4Ljg5NTQgMzMuMTA0NiAyOCAzMiAyOEMzMC44OTU0IDI4IDMwIDI4Ljg5NTQgMzAgMzBDMzAgMzEuMTA0NiAzMC44OTU0IDMyIDMyIDMyWiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] bg-repeat animate-rotate-slow animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-text-primary mb-4 transform transition-all duration-700 ease-out delay-100 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
              Viraasat
            </h3>
            <p className="text-text-secondary mb-6 transform transition-all duration-700 ease-out delay-200 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
              Preserving cultural heritage through immersive AR experiences. 
              Making history accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4 transform transition-all duration-700 ease-out delay-300 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative group"
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-text-primary text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="transform transition-all duration-700 ease-out delay-400 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="overflow-hidden">
                  <a 
                    href={link.href} 
                    className="text-text-secondary hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="transform transition-all duration-700 ease-out delay-500 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index} className="overflow-hidden">
                  <a 
                    href={link.href} 
                    className="text-text-secondary hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Languages */}
          <div className="transform transition-all duration-700 ease-out delay-600 opacity-0 animate-fade-in-up" style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <div className="space-y-3 text-text-secondary">
              <p className="flex items-center group">
                <span className="mr-3 group-hover:scale-110 transition-transform duration-300">📧</span>
                <a href="mailto:hello@viraasat.com" className="hover:text-primary transition-colors duration-300">
                  hello@viraasat.com
                </a>
              </p>
              <p className="flex items-center group">
                <span className="mr-3 group-hover:scale-110 transition-transform duration-300">📞</span>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="flex items-center group">
                <span className="mr-3 group-hover:scale-110 transition-transform duration-300">📍</span>
                <span>San Francisco, CA</span>
              </p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold text-text-primary mb-2">Language</h5>
              <div className="relative">
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-background border border-borders rounded-lg px-4 py-3 text-text-primary w-full appearance-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.native} ({lang.name})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <span className="text-text-secondary">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t border-borders flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 ease-out delay-700 opacity-0 animate-fade-in-up ${isVisible ? '!opacity-100 !translate-y-0' : ''}`}>
          <p className="text-text-secondary text-sm">
            © 2025 Viraasat. All rights reserved. Built with <span className="text-primary animate-pulse">❤️</span> for heritage preservation.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-text-secondary">
            <span className="flex items-center group">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">🌍</span>
              Available in 25+ languages
            </span>
            <span className="flex items-center group">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📱</span>
              iOS & Android
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}