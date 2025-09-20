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
import SunTemple from "./components/3dmodels/SunTemple";
import TajMahal from "./components/3dmodels/TajMahal";
import QutubMinar from "./components/3dmodels/QutubMinar";
import RedFort from "./components/3dmodels/RedFort";
import SanchiStupa from "./components/3dmodels/SanchiStupa";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle/>
      <Hero/>
      <h1>Konark Sun Temple</h1>
      <SunTemple/>
      <h1>Taj Mahal</h1>
      <TajMahal/>
      <h1>Qutub Minar</h1>
      <QutubMinar/>
      <h1>Red Fort</h1>
      <RedFort/>
      <h1>Sanchi Stupa</h1>
      <SanchiStupa/>
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
