export default function About() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Viraasat
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our mission is to digitize and preserve cultural heritage, making it accessible 
            to everyone through immersive AR technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h3>
            <p className="text-text-secondary mb-6">
              Historical sites are deteriorating, stories are being forgotten, and access 
              to cultural heritage is limited by geography, time, and resources.
            </p>
            
            <h3 className="text-2xl font-bold text-text-primary mb-4">Our Solution</h3>
            <p className="text-text-secondary">
              Viraasat uses cutting-edge AR technology to bring history to life, creating 
              immersive experiences that preserve and share cultural heritage with future generations.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-2xl">
            <div className="aspect-square bg-borders rounded-lg flex items-center justify-center">
              <span className="text-text-secondary">Mission Video/Animation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}