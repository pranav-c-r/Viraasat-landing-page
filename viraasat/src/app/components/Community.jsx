export default function Community() {
  const audiences = [
    {
      title: "Schools & Universities",
      description: "Transform history education with immersive AR experiences that bring textbooks to life",
      features: ["Curriculum integration", "Interactive assignments", "Virtual field trips", "Progress tracking"],
      icon: "🎓",
      cta: "Partner with Us"
    },
    {
      title: "Tourists & Travelers", 
      description: "Enhance your heritage site visits with guided AR tours and historical reconstructions",
      features: ["Self-guided tours", "Multilingual support", "Offline accessibility", "Photo opportunities"],
      icon: "✈️",
      cta: "Download App"
    },
    {
      title: "Local Communities",
      description: "Preserve and share your cultural heritage with the world through digital storytelling",
      features: ["Community contributions", "Local storytelling", "Cultural preservation", "Tourism boost"],
      icon: "🏘️",
      cta: "Share Your Story"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Community & Education
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Viraasat serves diverse communities united by a passion for heritage and culture
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-surface p-8 rounded-xl">
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{audience.icon}</div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">{audience.title}</h3>
              <p className="text-text-secondary mb-6 text-center">{audience.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {audience.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className="w-full bg-primary hover:bg-primary/90 text-background py-3 rounded-lg font-semibold transition-colors">
                {audience.cta}
              </button>
            </div>
          ))}
        </div>
        
        {/* Partnership Section */}
        <div className="mt-16 bg-surface p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">Partner with Viraasat</h3>
            <p className="text-text-secondary text-lg mb-8">
              Join museums, tourism boards, and educational institutions in preserving and sharing cultural heritage. 
              Together, we can make history accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg font-semibold transition-colors">
                Become a Partner
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}