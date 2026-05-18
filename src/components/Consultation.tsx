import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export const Consultation: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    timeframe: 'immediate',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury API call submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'residential',
        timeframe: 'immediate',
        message: ''
      });
    }, 6000);
  };

  return (
    <section id="consultation" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone/20 relative">
      {/* Decorative Blur Background Layer */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Left Column: Premium Process and Details */}
        <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-12">
          <div className="space-y-6">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">start your journey</p>
            <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light leading-tight">
              Let’s Design <br />Something <br />
              <span className="editorial-italic text-gold">Extraordinary</span>
            </h2>
            <p className="text-sm text-charcoal/70 font-light leading-relaxed max-w-md">
              We accept a highly limited number of residential and commercial projects annually to ensure absolute dedication to detailing and hand-crafted execution. Initiate your dialogue with our design directors.
            </p>
          </div>

          {/* Quick Process Steps */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold font-bold">I.</span>
              <div>
                <h4 className="font-serif text-sm font-semibold text-charcoal">Spatial Discovery</h4>
                <p className="text-xs text-charcoal/60 font-light mt-0.5">An initial discovery session discussing your sensory preferences, spatial challenges, and aesthetic aspirations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold font-bold">II.</span>
              <div>
                <h4 className="font-serif text-sm font-semibold text-charcoal">Tactile Pairings & Blueprint</h4>
                <p className="text-xs text-charcoal/60 font-light mt-0.5">We prepare bespoke architectural layouts, sun-path alignments, and a physical platter of raw textured stone and wood materials.</p>
              </div>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="border-t border-stone/20 pt-8 space-y-4">
            <div className="flex items-center gap-3 text-xs text-charcoal/80">
              <Phone size={14} className="text-gold" />
              <span className="font-semibold">+1 (212) 555-8900</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-charcoal/80">
              <Mail size={14} className="text-gold" />
              <span className="font-semibold">directors@aureliastudio.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-charcoal/80">
              <MapPin size={14} className="text-gold" />
              <span>Milan • New York • Dubai</span>
            </div>
          </div>
        </div>

        {/* Right Column: Luxury Form */}
        <div className="lg:col-span-7 bg-ivory rounded-[3rem] border border-stone/30 shadow-2xl p-8 md:p-12 relative flex flex-col justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexander Mercer"
                      className="w-full bg-beige/20 border border-stone/30 rounded-xl px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none transition-all duration-300 font-light"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@mercer.com"
                      className="w-full bg-beige/20 border border-stone/30 rounded-xl px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none transition-all duration-300 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 555-0199"
                      className="w-full bg-beige/20 border border-stone/30 rounded-xl px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none transition-all duration-300 font-light"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="projectType" className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Inquiry Category</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-beige/20 border border-stone/30 rounded-xl px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none transition-all duration-300 font-light cursor-pointer"
                    >
                      <option value="residential">Private Residential Estate</option>
                      <option value="luxury villas">Luxury Villa Concept</option>
                      <option value="penthouses">Bespoke Urban Penthouse</option>
                      <option value="hospitality">Commercial & Spa Concept</option>
                      <option value="other">Architectural Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Describe Your Vision</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the context of your space, material inclinations, and scale..."
                    className="w-full bg-beige/20 border border-stone/30 rounded-[1.2rem] px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none transition-all duration-300 font-light resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full relative group overflow-hidden py-4 bg-charcoal text-ivory text-xs uppercase tracking-[0.25em] font-semibold rounded-xl transition-all duration-500 shadow-xl border border-charcoal hover:bg-transparent hover:text-charcoal"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Private Inquiry
                    <Send size={12} />
                  </span>
                  <div className="absolute inset-0 bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 -z-0" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 max-w-md mx-auto"
              >
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold mx-auto border border-gold/30">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-3xl font-light text-charcoal">Dialogue Initiated</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  Thank you for your elegant inquiry. A design director from our studio will review your project details and reach out within 24 hours to schedule a confidential discover call.
                </p>
                <div className="border-t border-stone/20 pt-6 text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
                  AURELIA DIRECTORS OFFICE
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
