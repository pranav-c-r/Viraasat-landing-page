export default function Showcase() {
  const sites = [
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "Experience the magnificent Mughal architecture in stunning detail",
      image: "🕌"
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      description: "Explore the ancient Incan citadel with immersive AR reconstruction",
      image: "🏔️"
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      description: "Witness gladiatorial battles and Roman spectacles come to life",
      image: "🏟️"
    },
    {
      name: "Angkor Wat",
      location: "Cambodia",
      description: "Discover the largest religious monument in its full glory",
      image: "🛕"
    },
    {
      name: "Petra",
      location: "Jordan",
      description: "Walk through the rose-red city carved from sandstone cliffs",
      image: "🏛️"
    },
    {
      name: "Chichen Itza",
      location: "Mexico",
      description: "Learn about Mayan astronomy and architecture",
      image: "🗿"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Heritage Sites Showcase
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore world-renowned heritage sites through immersive AR experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-borders flex items-center justify-center text-6xl">
                {site.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{site.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{site.location}</p>
                <p className="text-text-secondary mb-4">{site.description}</p>
                <button className="bg-primary hover:bg-primary/90 text-background px-4 py-2 rounded-lg font-medium transition-colors">
                  View in AR
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">More heritage sites coming soon...</p>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-lg font-semibold transition-colors">
            Request a Site
          </button>
        </div>
      </div>
    </section>
  );
}