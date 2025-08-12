import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import QuoteCalculator from './components/QuoteCalculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'about', 'cotizacion', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section) || document.body;
        const offsetTop = section === 'inicio' ? 0 : element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed header
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
  };

  // Override setActiveSection to include smooth scrolling
  const handleSetActiveSection = (section: string) => {
    scrollToSection(section);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <Services />
        <About />
        <QuoteCalculator />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;