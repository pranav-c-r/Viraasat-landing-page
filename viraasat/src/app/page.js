import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Impact from './components/Impact';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

// Detailed Heritage site data
const heritageItems = [
  {
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
    link: '/taj-mahal',
    title: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    period: '1632-1653 CE',
    description: 'The Taj Mahal, an ivory-white marble mausoleum on the Yamuna riverbank, stands as the crown jewel of Mughal architecture. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site showcases perfect symmetry, intricate inlay work, and four minarets that frame the central dome.',
    highlights: ['Perfect architectural symmetry', 'Precious stone inlay work', 'Changing colors throughout the day', 'Symbol of eternal love'],
    yearBuilt: '1653',
    architect: 'Ustad Ahmad Lahauri'
  },
  {
    image: 'https://images.pexels.com/photos/33928936/pexels-photo-33928936.jpeg',
    link: '/red-fort',
    title: 'Red Fort (Lal Qila)',
    location: 'Delhi',
    period: '1638-1648 CE',
    description: 'The Red Fort served as the main residence of the Mughal emperors for nearly 200 years. This massive fortified palace showcases the peak of Mughal creativity and houses the famous Peacock Throne hall. Its red sandstone walls enclose palaces, audience halls, and beautiful gardens that once witnessed the grandeur of the Mughal Empire.',
    highlights: ['Massive red sandstone walls', 'Diwan-i-Khas (Hall of Private Audience)', 'Mughal gardens and water channels', 'Site of Independence Day celebrations'],
    yearBuilt: '1648',
    architect: 'Ustad Ahmad Lahauri'
  },
  {
    image: 'https://images.pexels.com/photos/16892577/pexels-photo-16892577.jpeg',
    link: '/qutub-minar',
    title: 'Qutub Minar',
    location: 'Delhi',
    period: '1192-1368 CE',
    description: 'Standing tall at 73 meters, the Qutub Minar is the tallest brick minaret in the world and a masterpiece of Indo-Islamic architecture. Built over several centuries by different rulers, it features intricate carvings, Quranic inscriptions, and geometric patterns. The complex also houses the famous Iron Pillar that has resisted corrosion for over 1,600 years.',
    highlights: ['Tallest brick minaret globally', 'Five distinct architectural stories', 'Rust-resistant Iron Pillar', 'Indo-Islamic architectural fusion'],
    yearBuilt: '1368',
    architect: 'Qutb ud-Din Aibak & successors'
  },
  {
    image: 'https://images.pexels.com/photos/6040175/pexels-photo-6040175.jpeg',
    link: '/sun-temple',
    title: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    period: '1250 CE',
    description: 'The Sun Temple at Konark is conceived as a gigantic chariot of the Sun God Surya, complete with 24 elaborately carved stone wheels and seven horses. This architectural marvel showcases the zenith of Kalinga architecture with its intricate sculptures depicting various aspects of life, celestial beings, and erotic art that reflects the liberal culture of ancient India.',
    highlights: ['Chariot-shaped temple design', '24 intricately carved wheels', 'Astronomical significance', 'Exquisite stone sculptures'],
    yearBuilt: '1250',
    architect: 'King Narasimhadeva I'
  },
  {
    image: 'https://images.pexels.com/photos/33266890/pexels-photo-33266890.jpeg',
    link: '/sanchi-stupa',
    title: 'Sanchi Stupa',
    location: 'Sanchi, Madhya Pradesh',
    period: '3rd century BCE - 12th century CE',
    description: 'The Great Stupa at Sanchi is one of the oldest stone structures in India and the best-preserved ancient stupa. Commissioned by Emperor Ashoka, it houses relics of Buddha and represents the cosmic mountain. The four ornate gateways (toranas) are masterpieces of ancient Indian art, depicting scenes from Buddha\'s life and Jataka tales through intricate stone carvings.',
    highlights: ['Oldest stone structure in India', 'Four ornate gateways (toranas)', 'Buddhist relics and artifacts', 'Ancient Indian sculptural art'],
    yearBuilt: '3rd century BCE',
    architect: 'Emperor Ashoka'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Heritage Sites Explorer */}
      <section className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#E8DCC6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">
              India's Heritage Treasures
            </h2>
            <p className="text-xl text-[#654321] max-w-4xl mx-auto">
              Journey through centuries of architectural brilliance and cultural heritage. Each monument tells a unique story of India's rich past, showcasing diverse architectural styles, cultural traditions, and historical significance.
            </p>
          </div>
          
          <div className="space-y-20">
            {heritageItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#CEB392] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8B4513]">
                      <div className="relative h-80 md:h-96">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        {/* Period Badge */}
                        <div className="absolute top-4 left-4 bg-[#8B4513] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.period}
                        </div>
                        
                        {/* Location Badge */}
                        <div className="absolute top-4 right-4 bg-[#CEB392] text-[#8B4513] px-3 py-1 rounded-full text-sm font-semibold">
                          📍 {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[#654321] mb-4">
                      <span className="text-sm">🏛️ Built: {item.yearBuilt}</span>
                      <span className="text-sm">👷 {item.architect}</span>
                    </div>
                  </div>

                  <p className="text-[#654321] text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#8B4513] text-lg">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#CEB392] rounded-full"></div>
                          <span className="text-[#654321] text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href={item.link}
                      className="bg-[#8B4513] hover:bg-[#654321] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>🏛️ Explore 3D Model</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    
                    <button className="bg-[#CEB392] hover:bg-[#D4C5A0] text-[#8B4513] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                      <span>📚 Learn More</span>
                    </button>
                  </div>

                  {/* UNESCO Badge */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="bg-gradient-to-r from-[#8B4513] to-[#CEB392] text-white px-3 py-1 rounded-full text-xs font-bold">
                      UNESCO WORLD HERITAGE
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 p-8 bg-gradient-to-r from-[#8B4513] to-[#CEB392] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Experience Virtual Heritage Tours</h3>
            <p className="mb-6 opacity-90">
              Immerse yourself in detailed 3D models and interactive experiences of India's most treasured monuments.
            </p>
            <button className="bg-white text-[#8B4513] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Wrapped Sections with IDs for Scroll Navigation */}
      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="impact">
        <Impact />
      </section>

      <section id="howitworks">
        <HowItWorks />
      </section>

      <section id="community">
        <Community />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </main>
  );
}