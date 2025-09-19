export default function Features() {
  const features = [
    {
      title: "AR Guided Tours",
      description: "Immersive guided experiences through historical sites with interactive storytelling",
      icon: "🏛️"
    },
    {
      title: "Offline-First",
      description: "Low-bandwidth friendly technology that works even without internet connectivity",
      icon: "📱"
    },
    {
      title: "Multilingual Support",
      description: "Narration and subtitles available in multiple languages for global accessibility",
      icon: "🌍"
    },
    {
      title: "3D Models",
      description: "Detailed 3D reconstructions and immersive storytelling experiences",
      icon: "🏗️"
    },
    {
      title: "Gamification",
      description: "Engaging features like badges, quizzes, and achievement systems",
      icon: "🎮"
    },
    {
      title: "Educational Tools",
      description: "Specially designed features for students, teachers, and researchers",
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Key Features
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover what makes Viraasat the perfect platform for experiencing cultural heritage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-surface p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}