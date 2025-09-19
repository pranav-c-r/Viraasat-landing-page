export default function Footer() {
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

  return (
    <footer className="bg-surface border-t border-borders">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Viraasat</h3>
            <p className="text-text-secondary mb-6">
              Preserving cultural heritage through immersive AR experiences. 
              Making history accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-text-secondary hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-text-secondary hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Languages */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <div className="space-y-3 text-text-secondary">
              <p>📧 hello@viraasat.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold text-text-primary mb-2">Language</h5>
              <select className="bg-background border border-borders rounded-lg px-3 py-2 text-text-primary">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-borders flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © 2025 Viraasat. All rights reserved. Built with ❤️ for heritage preservation.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-text-secondary">
            <span>🌍 Available in 25+ languages</span>
            <span>📱 iOS & Android</span>
          </div>
        </div>
      </div>
    </footer>
  );
}