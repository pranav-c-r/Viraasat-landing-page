import Link from 'next/link';
import Image from 'next/image';

export default function Monuments({ items = [] }) {
  return (
    <section id="monuments" className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#E8DCC6]">
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
          {items.map((item, index) => (
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
  );
}
