export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
          Step into History.
          <span className="block text-primary">Experience Culture in AR.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Preserving heritage through immersive AR experiences. Discover ancient monuments, 
          lost civilizations, and cultural treasures like never before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Download App
          </button>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Try Demo
          </button>
        </div>
        <div className="mt-12">
          {/* AR demo mockup placeholder */}
          <div className="bg-surface p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="aspect-video bg-borders rounded-lg flex items-center justify-center">
              <span className="text-text-secondary">AR Demo Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}