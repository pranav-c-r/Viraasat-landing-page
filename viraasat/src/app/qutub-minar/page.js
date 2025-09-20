'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import QutubMinar from '../components/3dmodels/QutubMinar';

export default function QutubMinarPage() {
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
            Qutub Minar
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Witness the tallest brick minaret in the world, a magnificent example of Indo-Islamic architecture. 
            This UNESCO World Heritage Site stands as a testament to Delhi's rich medieval history.
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
                Explore the intricate carvings and architectural details of this 12th-century masterpiece. Drag to rotate, scroll to zoom.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <QutubMinar />
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
                  The Qutub Minar was built in the early 13th century by Qutb-ud-din Aibak, the first Muslim ruler of Delhi. 
                  Construction was later completed by his successor Iltutmish. The minaret was built to celebrate Muslim dominance 
                  in Delhi after the defeat of the last Hindu kingdom.
                </p>
                <p>
                  Standing at 72.5 meters (238 feet), it remains the tallest brick minaret in the world and showcases 
                  the brilliant fusion of Indo-Islamic architectural styles that would define the region for centuries.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Five Stories</h4>
                  <p className="text-text-secondary">The minaret has five distinct stories, each marked by a projecting balcony</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Calligraphy</h4>
                  <p className="text-text-secondary">Beautiful Arabic calligraphy from the Quran adorns the tower's surface</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Red Sandstone</h4>
                  <p className="text-text-secondary">Built primarily with red sandstone and marble, showcasing exquisite craftsmanship</p>
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
              <div className="text-3xl font-bold text-accent mb-2">1193</div>
              <div className="text-text-secondary">Construction Started</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">72.5m</div>
              <div className="text-text-secondary">Height</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">379</div>
              <div className="text-text-secondary">Steps to Top</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1993</div>
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