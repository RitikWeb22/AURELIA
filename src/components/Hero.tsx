import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToProjects = () => {
    const element = document.getElementById('showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Decorative Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 pointer-events-none opacity-20 -z-10">
        <div className="border-r border-stone/40 h-full"></div>
        <div className="border-r border-stone/40 h-full"></div>
        <div></div>
      </div>

      {/* Main Hero Visuals & Titles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
        {/* Left Text Content */}
        <div className="lg:col-span-6 z-10 flex flex-col space-y-8 pr-0 lg:pr-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.3em] font-medium"
          >
            <span className="h-px w-8 bg-gold"></span>
            AURELIA ARCHITECTURE & DESIGN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="editorial-title text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-charcoal font-light"
          >
            Timeless <span className="editorial-italic text-gold">Interiors</span>.
            <br />
            Modern Living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="text-base md:text-lg text-charcoal/70 font-light max-w-lg leading-relaxed"
          >
            Crafting elevated spaces that balance architectural precision with rich, human emotion. A luxury design studio dedicated to singular residential and hospitality masterpieces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-md hover:shadow-lg shadow-charcoal/10"
            >
              Explore Works
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="group relative overflow-hidden px-8 py-3.5 text-charcoal text-xs uppercase tracking-[0.2em] font-semibold border border-stone rounded-full hover:border-charcoal transition-all duration-300"
            >
              <span className="relative z-10">Private Inquiry</span>
              <div className="absolute inset-0 bg-stone/20 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          </motion.div>
        </div>

        {/* Right Hero Image Column with Parallax Frame */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 w-full flex justify-center lg:justify-end">
          {/* Asymmetric floating card design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-stone/20"
          >
            {/* Ambient luxury light leak overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 via-transparent to-transparent pointer-events-none mix-blend-color-dodge z-10" />

            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=90"
              alt="Luxury minimal living room designed by Aurelia Studio"
              className="w-full h-full object-cover"
            />

            {/* Bottom floating details */}
            <div className="absolute bottom-6 left-6 right-6 bg-ivory/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 flex justify-between items-center z-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60">Signature Project</p>
                <p className="font-serif text-sm font-medium text-charcoal">The Como Penthouse, Milan</p>
              </div>
              <span className="text-[11px] uppercase font-semibold text-gold tracking-widest">
                EST. 2018
              </span>
            </div>
          </motion.div>

          {/* Floating artistic frame accent */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute -bottom-8 -left-6 hidden md:block w-36 aspect-[3/4] bg-beige/90 backdrop-blur-md rounded-2xl border border-stone/30 shadow-xl p-4 z-20"
          >
            <p className="text-[9px] uppercase tracking-widest text-gold font-bold mb-1">Concept No. 04</p>
            <p className="font-serif text-xs text-charcoal leading-relaxed font-light">
              "Materiality, soft lighting, and architectural form in seamless harmony."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Indicators of Hero */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-12 pt-8 border-t border-stone/20 text-charcoal/60 text-xs tracking-widest">
        <div className="flex gap-8">
          <div>
            <span className="text-gold font-bold">MILAN</span> — VIA BRERA 12
          </div>
          <div>
            <span className="text-gold font-bold">NEW YORK</span> — 5TH AVE 400
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="flex items-center gap-2 font-semibold uppercase hover:text-gold transition-colors duration-300 group"
        >
          SCROLL TO EXPLORE
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-gold group-hover:scale-110 transition-transform" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
