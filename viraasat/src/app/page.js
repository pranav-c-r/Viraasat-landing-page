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
import InfiniteMenu from './components/InfiniteMenu';

// Heritage site data with high-quality stock photos
const heritageItems = [
  {
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
    link: '/taj-mahal',
    title: 'Taj Mahal',
    description: 'Iconic ivory-white marble mausoleum on the Yamuna riverbank'
  },
  {
    image: 'https://images.pexels.com/photos/33928936/pexels-photo-33928936.jpeg',
    link: '/red-fort',
    title: 'Red Fort',
    description: 'Historic fortified palace of the Mughal emperors of India'
  },
  {
    image: 'https://images.pexels.com/photos/16892577/pexels-photo-16892577.jpeg',
    link: '/qutub-minar',
    title: 'Qutub Minar',
    description: 'Tallest brick minaret in the world, UNESCO World Heritage'
  },
  {
    image: 'https://images.pexels.com/photos/6040175/pexels-photo-6040175.jpeg',
    link: '/sun-temple',
    title: 'Sun Temple',
    description: 'Ancient Hindu temple dedicated to the Hindu sun god Surya'
  },
  {
    image: 'https://images.pexels.com/photos/33266890/pexels-photo-33266890.jpeg',
    link: '/sanchi-stupa',
    title: 'Sanchi Stupa',
    description: 'Buddhist complex famous for its Great Stupa'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle/>
      <Hero/>
      
      {/* Interactive Heritage Explorer */}
      <section className="py-20 bg-gradient-to-b from-background to-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Explore Heritage Sites
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Navigate through India's magnificent heritage sites in an immersive 3D experience. 
              Drag to rotate and discover the stories behind each monument.
            </p>
          </div>
          
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-borders/20 bg-surface/20 backdrop-blur-sm">
            <InfiniteMenu items={heritageItems}/>
          </div>
        </div>
      </section>

      <About/>
      <Features/>
      <Showcase/>
      <Impact/>
      <HowItWorks/>
      <Community/>
      <CTA/>
      <Footer/>
    </main>
  );
}
