import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory/80 py-16 px-6 md:px-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start text-left">
          {/* Logo Area */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="editorial-title text-3xl md:text-4xl tracking-widest text-white">
              A U R E L I A
            </h3>
            <p className="text-xs text-ivory/60 font-light leading-relaxed max-w-sm">
              An architectural interior studio focused on high-end luxury penthouses, custom residential design, and high-fidelity wellness commercial lounges worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Site links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">Studio Sections</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#showcase" className="hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  curated portfolio <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  design values <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  capabilities <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  transformations <ArrowUpRight size={10} />
                </a>
              </li>
            </ul>
          </div>

          {/* Localized Details & Locations */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">Studio Hubs</h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-light leading-relaxed">
              <div>
                <p className="font-bold text-white text-[10px] uppercase tracking-wider mb-1">MILANO</p>
                <p className="text-white/60 text-[11px]">Via Brera, 12</p>
                <p className="text-white/40 text-[10px] italic">20121 Milano MI, Italy</p>
              </div>
              <div>
                <p className="font-bold text-white text-[10px] uppercase tracking-wider mb-1">NEW YORK</p>
                <p className="text-white/60 text-[11px]">400 Fifth Ave, Floor 14</p>
                <p className="text-white/40 text-[10px] italic">New York, NY 10018, USA</p>
              </div>
            </div>
            <p className="text-[10px] text-white/50 pt-2">
              Licensed Luxury Interior Architect — Certified USA/EU Association member.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] text-white/40 uppercase tracking-widest font-light gap-4">
          <p>© {new Date().getFullYear()} AURELIA STUDIO. ALL PRIVILEGES SECURED.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-300 font-semibold"
          >
            RETURN TO SKY
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};
