export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
          Ready to Explore Heritage Like Never Before?
        </h2>
        <p className="text-xl text-background/90 mb-12 max-w-3xl mx-auto">
          Join millions of users discovering cultural treasures through immersive AR experiences. 
          Download Viraasat today and step into history.
        </p>
        
        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-background hover:bg-background/90 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3">
            <span>📱</span>
            Download for iOS
          </button>
          <button className="bg-background hover:bg-background/90 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3">
            <span>🤖</span>
            Download for Android
          </button>
        </div>
        
        {/* Additional CTAs */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-background/20">
            <h3 className="text-xl font-bold text-background mb-2">Try Our Demo</h3>
            <p className="text-background/80 mb-4">Experience AR heritage tours without downloading</p>
            <button className="border-2 border-background text-background hover:bg-background hover:text-primary px-4 py-2 rounded-lg font-medium transition-colors">
              Launch Demo
            </button>
          </div>
          
          <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-background/20">
            <h3 className="text-xl font-bold text-background mb-2">Stay Updated</h3>
            <p className="text-background/80 mb-4">Get notified about new heritage sites and features</p>
            <button className="border-2 border-background text-background hover:bg-background hover:text-primary px-4 py-2 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-background/20">
          <p className="text-background/70 mb-4">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-background/60">
            <span>🏛️ UNESCO</span>
            <span>🏫 Harvard University</span>
            <span>🏛️ British Museum</span>
            <span>🌍 Tourism Boards</span>
          </div>
        </div>
      </div>
    </section>
  );
}