import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CircleDot, Landmark } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Asymmetric Layered Imagery */}
        <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[500px] md:min-h-[600px] mb-8 lg:mb-0">
          
          {/* Subtle marble dust aura background layer */}
          <div className="absolute w-[80%] h-[80%] bg-[#F5EFE6] rounded-full filter blur-[80px] opacity-40 -z-10 animate-pulse-slow" />
          
          {/* Main Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-[80%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border border-stone/20"
          >
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=90"
              alt="Sculptural architecture design"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Overlapping Foreground Image (Parallax Shift) */}
          <motion.div
            initial={{ opacity: 0, y: 100, x: -30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute -bottom-6 right-0 md:right-4 w-[50%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-ivory"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=90"
              alt="Premium stone detail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Right Column: Editorial Narrative & Principles */}
        <div className="lg:col-span-6 text-left space-y-10">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">studio ethos</p>
            <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light leading-tight">
              Crafting <span className="editorial-italic text-gold">Emotional</span> <br />Architectures
            </h2>
          </div>

          <p className="text-base md:text-lg text-charcoal/70 font-light leading-relaxed">
            At AURELIA, we do not simply organize materials; we compose spatial feelings. We believe an exceptional home is a silent retreat that rejuvenates the spirit. We design for the quiet intervals—the warm filter of light at 4 PM, the smooth chill of solid travertine underfoot, and the acoustically balanced voids where ideas are born.
          </p>

          {/* Core Philosophy Bullets */}
          <div className="space-y-6 pt-4">
            
            {/* Principle 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-beige flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 border border-stone/20 shrink-0">
                <Landmark size={18} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
                  Curated Materiality
                </h4>
                <p className="text-xs text-charcoal/60 mt-1 font-light leading-relaxed">
                  We hand-select raw stones, textured linen fabrics, and custom metal alloys that grow richer in character as they patina with age.
                </p>
              </div>
            </motion.div>

            {/* Principle 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-beige flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 border border-stone/20 shrink-0">
                <CircleDot size={18} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
                  Architectural Precision
                </h4>
                <p className="text-xs text-charcoal/60 mt-1 font-light leading-relaxed">
                  Aligning walls and openings specifically with solar angles, creating silent framing zones that treat natural light as a physical material.
                </p>
              </div>
            </motion.div>

            {/* Principle 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-beige flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 border border-stone/20 shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
                  Sensory Intimacy
                </h4>
                <p className="text-xs text-charcoal/60 mt-1 font-light leading-relaxed">
                  Integrating customized atmospheric acoustics, bespoke furniture dimensions, and tactile fabrics that ground human interaction in complete comfort.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
