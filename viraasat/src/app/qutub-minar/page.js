'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import dynamic from 'next/dynamic';

const QutubMinar = dynamic(() => import('../components/3dmodels/QutubMinar'), {
  ssr: false
});

export default function QutubMinarPage() {
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
            Qutub Minar
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Explore the world&apos;s tallest brick minaret, a marvel of Indo-Islamic architecture built in the early 13th century.
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
                Rotate and zoom into the Qutub Minar&apos;s intricate carvings and towering presence.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <QutubMinar />
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
                  The Qutub Minar was commissioned by Qutb-ud-din Aibak in 1193 and completed by his successor Iltutmish. 
                  Standing at 73 meters, it symbolizes the beginning of Muslim rule in India.
                </p>
                <p>
                  It remains one of Delhi&apos;s most visited monuments and is part of the Qutub Complex, which is a UNESCO World Heritage Site.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Five Distinct Storeys</h4>
                  <p className="text-text-secondary">Each marked by a projecting balcony and tapering design</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Red Sandstone &amp; Marble</h4>
                  <p className="text-text-secondary">Exquisite use of red sandstone with later additions in marble</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Inscriptions</h4>
                  <p className="text-text-secondary">Verses from the Quran inscribed throughout the structure</p>
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
              <div className="text-3xl font-bold text-accent mb-2">1193</div>
              <div className="text-text-secondary">Construction Began</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">73m</div>
              <div className="text-text-secondary">Height</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-text-secondary">Distinct Storeys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1993</div>
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