'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import dynamic from 'next/dynamic';

const TajMahal = dynamic(() => import('../components/3dmodels/TajMahal'), {
  ssr: false
});

export default function TajMahalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-surface/50 to-background">
      <ThemeToggle />
      
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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent">
            Taj Mahal
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Experience the magnificent ivory-white marble mausoleum built on the banks of the Yamuna river. 
            A symbol of eternal love and one of the Seven Wonders of the World.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-borders/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Interactive 3D Model
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore every detail of this architectural masterpiece. Drag to rotate, scroll to zoom.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <TajMahal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Historical Significance</h3>
              <div className="prose prose-lg text-text-secondary space-y-4">
                <p>
                  The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal. 
                  This magnificent mausoleum took over 20 years to complete and represents the finest example of Mughal architecture.
                </p>
                <p>
                  Built using white marble that appears to change color throughout the day, the Taj Mahal combines elements from Islamic, 
                  Persian, Ottoman Turkish and Indian architectural styles.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Central Dome</h4>
                  <p className="text-text-secondary">The main dome rises 115 feet and is surrounded by four smaller domes</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Minarets</h4>
                  <p className="text-text-secondary">Four 130-foot tall minarets frame the tomb, each slightly tilted outward</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Inlay Work</h4>
                  <p className="text-text-secondary">Intricate pietra dura with precious and semi-precious stones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface/10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-text-primary text-center mb-12">Quick Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1632</div>
              <div className="text-text-secondary">Construction Started</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">22</div>
              <div className="text-text-secondary">Years to Build</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20,000</div>
              <div className="text-text-secondary">Workers Involved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1983</div>
              <div className="text-text-secondary">UNESCO Heritage</div>
            </div>
          </div>
        </div>
      </section>

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