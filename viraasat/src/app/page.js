import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Impact from './components/Impact';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Features />
      <Showcase />
      <Impact />
      <HowItWorks />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
