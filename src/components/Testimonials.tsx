import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "AURELIA didn’t just draft a beautiful home for us; they designed our daily human rituals. The way the winter sun sets precisely along the travertine library walls has changed our family's evening dynamic completely. They are true spatial artists.",
    author: "Marcella & Stefano Moretti",
    role: "Art Collectors & Philanthropists",
    project: "Lake Como Villa"
  },
  {
    quote: "Every inch of the spa lobby breathes quiet authority. Guests routinely mention the immediate sense of physical weight lifting as they enter. Aurelia managed to synthesize acoustic dampening, natural stone warmth, and lighting perfection into a coherent masterpiece.",
    author: "Elena Rostova",
    role: "CEO, Amara Group",
    project: "Amara Wellness Resort"
  },
  {
    quote: "As a minimalist, I am extremely critical of detail execution. Aurelia's attention to flush architectural joints, hidden storage, and singular material consistency in our penthouse was unparalleled. A world-class standard.",
    author: "Julian Vance",
    role: "Creative Director, L&V",
    project: "Soho Loft, NY"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-t border-stone/20">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">client voices</p>
        <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light">
          Living in <span className="editorial-italic text-gold">Harmony</span>
        </h2>
      </div>

      {/* Grid of Magazine Style Floating Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
            className={`relative p-10 bg-ivory rounded-[2.5rem] border border-stone/30 shadow-md flex flex-col justify-between text-left hover:shadow-xl hover:border-gold/30 transition-all duration-500 min-h-[360px] ${
              index === 1 ? 'lg:translate-y-4 shadow-lg' : ''
            }`}
          >
            {/* Elegant Serif Quotation Mark */}
            <div className="absolute top-8 left-8 text-gold/10 pointer-events-none">
              <Quote size={64} className="stroke-[1px]" />
            </div>

            <div className="space-y-6 z-10 pt-4">
              <p className="font-serif text-lg md:text-xl text-charcoal leading-relaxed font-light italic">
                "{t.quote}"
              </p>
            </div>

            <div className="border-t border-stone/20 pt-6 mt-8 z-10">
              <h4 className="font-serif text-base font-semibold text-charcoal">{t.author}</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[10px] text-charcoal/50 uppercase tracking-widest font-light">{t.role}</span>
                <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold border border-gold/40 rounded px-2 py-0.5">
                  {t.project}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
