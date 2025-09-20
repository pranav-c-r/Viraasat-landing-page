'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import RedFort from '../components/3dmodels/RedFort';

export default function RedFortPage() {
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
            Red Fort
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Discover the historic fortified palace that served as the main residence of the Mughal emperors. 
            A symbol of India&apos;s rich heritage and the site of India&apos;s Independence Day celebrations.
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
                Explore the massive red sandstone walls and the grandeur of Mughal architecture. Drag to rotate, scroll to zoom.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface/30 to-surface/10 border border-borders/20">
              <RedFort />
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
                  The Red Fort, known as Lal Qila, was constructed by the Mughal Emperor Shah Jahan in 1648 when he moved his capital from Agra to Delhi. 
                  This impressive fortress was the main residence of Mughal emperors for nearly 200 years.
                </p>
                <p>
                  It is most famous as the location where India&apos;s first Prime Minister, Jawaharlal Nehru, 
                  hoisted the national flag on August 15, 1947, marking India&apos;s independence from British rule.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Architectural Features</h3>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Red Sandstone Walls</h4>
                  <p className="text-text-secondary">The massive walls give the fort its distinctive color and grandeur</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Diwan-i-Aam</h4>
                  <p className="text-text-secondary">The Hall of Public Audience where the emperor met common citizens</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-6 backdrop-blur-sm border border-borders/20">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Diwan-i-Khas</h4>
                  <p className="text-text-secondary">The Hall of Private Audience, formerly home to the Peacock Throne</p>
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
              <div className="text-3xl font-bold text-accent mb-2">1648</div>
              <div className="text-text-secondary">Construction Started</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">254</div>
              <div className="text-text-secondary">Acres in Area</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">18m</div>
              <div className="text-text-secondary">Height of Walls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2007</div>
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
