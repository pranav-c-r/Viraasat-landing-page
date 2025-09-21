'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import dynamic from 'next/dynamic';

const SanchiStupa = dynamic(() => import('../components/3dmodels/SanchiStupa'), {
  ssr: false
});

export default function SanchiStupaPage() {
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
            Sanchi Stupa
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Journey to one of the oldest Buddhist monuments in the world. The Great Stupa at Sanchi stands as a 
            remarkable testament to Buddhist art and architecture, dating back to the 3rd century BCE.
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
                Explore the magnificent Great Stupa and its ornate gateways with detailed Buddhist sculptures. Drag to rotate, scroll to zoom.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <SanchiStupa />
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
                  The Great Stupa at Sanchi was originally commissioned by Emperor Ashoka in the 3rd century BCE. 
                  It was built to house relics of the Buddha and became one of the most important pilgrimage sites 
                  in Buddhism. The site contains the oldest stone structures in India.
                </p>
                <p>
                  The complex showcases the evolution of Buddhist art and architecture over several centuries, 
                  from the Mauryan period through the Gupta period, making it an invaluable repository of ancient 
                  Indian Buddhist heritage and artistic traditions.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Great Stupa</h4>
                  <p className="text-text-secondary">The main hemispherical dome structure, 36.6 meters in diameter</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Four Toranas</h4>
                  <p className="text-text-secondary">Ornate gateways with intricate carvings depicting Jataka tales</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Harmika</h4>
                  <p className="text-text-secondary">Square railing on top representing the abode of the gods</p>
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
              <div className="text-3xl font-bold text-accent mb-2">3rd</div>
              <div className="text-text-secondary">Century BCE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">36.6m</div>
              <div className="text-text-secondary">Stupa Diameter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-text-secondary">Ornate Gateways</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1989</div>
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