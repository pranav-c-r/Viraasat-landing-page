export default function CulturalHeritagePlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2E2B26] dark:to-[#2D3E5C]">
      {/* Header */}
      <header className="bg-[#2D3E5C] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#C7A04D]">HeritageAR</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-[#C7A04D] transition-colors duration-300">Features</a>
            <a href="#experience" className="hover:text-[#C7A04D] transition-colors duration-300">Experience</a>
            <a href="#pricing" className="hover:text-[#C7A04D] transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-[#C7A04D] transition-colors duration-300">Contact</a>
          </nav>
          <button className="bg-[#A34F3E] hover:bg-[#8a4233] text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
            Download App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2D3E5C] dark:text-white mb-6">
              Explore India's Heritage in <span className="text-[#A34F3E]">Augmented Reality</span>
            </h2>
            <p className="text-xl text-[#6C7156] dark:text-gray-300 mb-8">
              Experience historical monuments through immersive AR technology, even without internet connectivity. 
              Discover stories, take virtual tours, and connect with India's rich cultural past.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#A34F3E] hover:bg-[#8a4233] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-[#2D3E5C] dark:border-white text-[#2D3E5C] dark:text-white hover:bg-[#2D3E5C] dark:hover:bg-white hover:text-white dark:hover:text-[#2D3E5C] px-8 py-3 rounded-full font-medium transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for 3D model */}
            <div className="w-full h-80 bg-gradient-to-br from-[#A39F8B] to-[#6C7156] rounded-3xl shadow-2xl flex items-center justify-center">
              <span className="text-white text-lg">3D Model Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-[#2E2B26] px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2D3E5C] dark:text-white mb-16">Amazing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#C7A04D] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#2D3E5C] dark:text-white mb-2">Offline AR Experience</h3>
              <p className="text-[#6C7156] dark:text-gray-300">Access augmented reality content even without internet connection through our progressive download system.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#A34F3E] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#2D3E5C] dark:text-white mb-2">Historical Narratives</h3>
              <p className="text-[#6C7156] dark:text-gray-300">Immerse yourself in authentic stories narrated by local guides and historians with rich cultural context.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#6C7156] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#2D3E5C] dark:text-white mb-2">Interactive Quizzes</h3>
              <p className="text-[#6C7156] dark:text-gray-300">Test your knowledge with engaging quizzes and educational tools designed for students and teachers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-[#A39F8B] to-[#6C7156] dark:from-[#2E2B26] dark:to-[#2D3E5C]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">Our platform seamlessly blends technology with cultural heritage preservation through these simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-3xl font-bold text-[#A34F3E]">1</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Download & Explore</h3>
              <p className="text-white/80">Download the app and browse available heritage sites with lightweight previews.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-3xl font-bold text-[#A34F3E]">2</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Activate AR Experience</h3>
              <p className="text-white/80">Point your device at the monument or use markerless technology to activate AR overlays.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-3xl font-bold text-[#A34F3E]">3</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Immerse & Learn</h3>
              <p className="text-white/80">Explore 3D reconstructions, listen to stories, and interact with historical timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-[#2E2B26] px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2D3E5C] dark:text-white mb-4">Simple Pricing</h2>
          <p className="text-xl text-center text-[#6C7156] dark:text-gray-300 mb-16">Choose the plan that works best for you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-8 rounded-2xl shadow-lg border-2 border-[#C7A04D] transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2D3E5C] dark:text-white mb-4">Free Tier</h3>
              <div className="text-4xl font-bold text-[#A34F3E] mb-6">$0<span className="text-lg text-[#6C7156] dark:text-gray-400">/forever</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic AR previews of 5 monuments
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Limited storytelling
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Standard quality models
                </li>
              </ul>
              <button className="w-full bg-[#A34F3E] hover:bg-[#8a4233] text-white py-3 rounded-full font-medium transition-colors duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-b from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-8 rounded-2xl shadow-lg border-2 border-[#C7A04D] transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-[#C7A04D] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-[#2D3E5C] dark:text-white mb-4">Explorer</h3>
              <div className="text-4xl font-bold text-[#A34F3E] mb-6">$5<span className="text-lg text-[#6C7156] dark:text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full access to all monuments
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete narrated stories
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  High-quality 3D models
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interactive quizzes
                </li>
              </ul>
              <button className="w-full bg-[#A34F3E] hover:bg-[#8a4233] text-white py-3 rounded-full font-medium transition-colors duration-300">
                Subscribe Now
              </button>
            </div>
            
            <div className="bg-gradient-to-b from-[#F2EAD3] to-[#D9C7A0] dark:from-[#2D3E5C] dark:to-[#2E2B26] p-8 rounded-2xl shadow-lg border-2 border-[#C7A04D] transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2D3E5C] dark:text-white mb-4">Educational</h3>
              <div className="text-4xl font-bold text-[#A34F3E] mb-6">$49<span className="text-lg text-[#6C7156] dark:text-gray-400">/year</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Explorer
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Classroom management tools
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Student progress tracking
                </li>
                <li className="flex items-center text-[#6C7156] dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#A34F3E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom content creation
                </li>
              </ul>
              <button className="w-full bg-[#A34F3E] hover:bg-[#8a4233] text-white py-3 rounded-full font-medium transition-colors duration-300">
                Get for School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#2D3E5C] to-[#6C7156] dark:from-[#2E2B26] dark:to-[#2D3E5C] px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20">
            <h2 className="text-4xl font-bold text-center text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-center text-white/90 mb-12">Have questions or want to contribute to our cultural heritage platform? Reach out to us!</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C7A04D]" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C7A04D]" 
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C7A04D]" 
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C7A04D]" 
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#C7A04D] hover:bg-[#b5913f] text-white py-3 rounded-full font-medium transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2B26] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#C7A04D] mb-4">HeritageAR</h3>
              <p className="text-gray-400">Bringing India's cultural heritage to life through augmented reality technology.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C7A04D] transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.027 10.027 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400">Email: info@heritagear.com</p>
              <p className="text-gray-400">Phone: +91 9876543210</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} HeritageAR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}