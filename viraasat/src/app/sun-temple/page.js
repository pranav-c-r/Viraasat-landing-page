'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import dynamic from 'next/dynamic';

const SunTemple = dynamic(() => import('../components/3dmodels/SunTemple'), {
  ssr: false
});

export default function SunTemplePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-surface/50 to-background">
      <ThemeToggle />
      
      {/* Header */}
      <div className="relative z-10 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Heritage Explorer
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent">
            Konark Sun Temple
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Marvel at the architectural wonder dedicated to the Hindu sun god Surya. Known as the &quot;Black Pagoda,&quot; 
            this 13th-century temple is conceived as a gigantic chariot with elaborately carved stone wheels.
          </p>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-borders/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Interactive 3D Model
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore the intricate stone carvings and the unique chariot design of this architectural masterpiece. Drag to rotate, scroll to zoom.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <SunTemple />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Historical Significance</h3>
              <div className="prose prose-lg text-text-secondary space-y-4">
                <p>
                  The Konark Sun Temple was built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty. 
                  This magnificent temple is designed in the shape of a gigantic chariot with 24 wheels drawn by seven horses, 
                  all carved from stone, representing the sun god Surya&apos;s chariot.
                </p>
                <p>
                  The temple is famous for its exceptional architecture and stone carvings that depict various aspects of life, 
                  including erotic sculptures, celestial beings, animals, and floral patterns, showcasing the artistic excellence 
                  of ancient Indian craftsmanship.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Chariot Wheels</h4>
                  <p className="text-text-secondary">24 intricately carved stone wheels, each about 10 feet in diameter</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Seven Horses</h4>
                  <p className="text-text-secondary">Seven stone horses represent the seven days of the week</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Kalinga Architecture</h4>
                  <p className="text-text-secondary">Built in the traditional Kalinga architectural style of Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-surface/10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-text-primary text-center mb-12">Quick Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1250</div>
              <div className="text-text-secondary">Built Around</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24</div>
              <div className="text-text-secondary">Stone Wheels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">7</div>
              <div className="text-text-secondary">Stone Horses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1984</div>
              <div className="text-text-secondary">UNESCO Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore More Heritage Sites
          </Link>
        </div>
      </section>
    </main>
  );
}