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
import Monuments from './components/Monuments';

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

      {/* Heritage Sites Explorer now in Monuments component */}
      <Monuments items={heritageItems} />

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