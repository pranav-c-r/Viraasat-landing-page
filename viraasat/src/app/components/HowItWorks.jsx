export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Download App",
      description: "Get the Viraasat app from App Store or Play Store. Free download, no subscription required.",
      icon: "📱"
    },
    {
      step: "02", 
      title: "Scan QR / Select Site",
      description: "Scan the QR code at heritage sites or choose from our digital catalog of locations.",
      icon: "📷"
    },
    {
      step: "03",
      title: "Explore in AR",
      description: "Immerse yourself in history with guided AR tours, 3D reconstructions, and interactive content.",
      icon: "🔍"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Three simple steps to unlock immersive heritage experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-background font-bold text-xl rounded-full mb-6">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="text-6xl mb-6">{step.icon}</div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
              
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-borders transform -translate-y-1/2 -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Start Exploring?</h3>
            <p className="text-text-secondary mb-6">
              Join thousands of history enthusiasts discovering heritage through AR
            </p>
            <button className="bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Download Viraasat App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}