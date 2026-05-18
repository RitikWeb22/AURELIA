import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { LuxuryCanvas } from './components/LuxuryCanvas';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Consultation } from './components/Consultation';
import { Footer } from './components/Footer';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dynamic Floating CTA Trigger based on scroll
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactScroll = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal overflow-hidden selection:bg-gold selection:text-charcoal">
      {/* 1. Interactive 3D Luxury Background */}
      <LuxuryCanvas />

      {/* 2. Floating Header Navbar */}
      <Navbar onContactClick={handleContactScroll} />

      {/* 3. Immersive Main Contents */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Fullscreen Hero Section */}
        <Hero onContactClick={handleContactScroll} />

        {/* Bento Grid Featured Showcase */}
        <Projects />

        {/* Studio Philosophy Narrative */}
        <Philosophy />

        {/* Interactive Capability Services */}
        <Services />

        {/* Transformation Before / After Slider */}
        <BeforeAfter />

        {/* Premium Client Voices Testimonials */}
        <Testimonials />

        {/* Lead Capture Strategic Consultation Form */}
        <Consultation />
      </main>

      {/* 4. Luxury Location Directory & Footer */}
      <Footer />

      {/* 5. Sticky Floating Action CTA Widget */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed bottom-8 right-8 z-40 hidden sm:flex items-center gap-3 bg-charcoal text-white rounded-full p-2 pl-6 shadow-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 group hover:shadow-gold/10"
          >
            <div className="text-left select-none">
              <p className="text-[8px] uppercase tracking-[0.2em] text-gold font-bold">Ready to Begin?</p>
              <p className="text-[10px] text-ivory/80 font-light pr-4 uppercase tracking-widest font-semibold">Private Advisory</p>
            </div>
            
            <button
              onClick={handleContactScroll}
              className="w-12 h-12 rounded-full bg-gold text-charcoal flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg group-hover:scale-105"
              aria-label="Book Consultation Now"
            >
              <Calendar size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
