import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-ivory/90 backdrop-blur-md border-b border-stone/20 shadow-sm'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="editorial-title text-2xl md:text-3xl tracking-widest text-charcoal flex items-center gap-2 group"
          >
            <span className="font-extralight transition-colors group-hover:text-gold">A U R E L I A</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] text-charcoal/80">
            <a
              href="#showcase"
              onClick={(e) => handleLinkClick(e, 'showcase')}
              className="hover:text-gold transition-colors duration-300"
            >
              Showcase
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleLinkClick(e, 'philosophy')}
              className="hover:text-gold transition-colors duration-300"
            >
              Philosophy
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-gold transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#before-after"
              onClick={(e) => handleLinkClick(e, 'before-after')}
              className="hover:text-gold transition-colors duration-300"
            >
              Before/After
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="relative group overflow-hidden px-6 py-2.5 bg-charcoal text-ivory text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-charcoal hover:bg-transparent hover:text-charcoal"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Book Consultation
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 -z-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-ivory flex flex-col justify-center items-center transition-all duration-700 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
          <div className="border-r border-stone h-full"></div>
          <div className="border-r border-stone h-full"></div>
          <div></div>
        </div>

        <nav className="flex flex-col space-y-8 text-center z-10">
          <a
            href="#"
            className="editorial-title text-4xl tracking-widest text-charcoal mb-8"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AURELIA
          </a>
          <a
            href="#showcase"
            onClick={(e) => handleLinkClick(e, 'showcase')}
            className="editorial-title text-3xl font-light text-charcoal hover:text-gold transition-colors"
          >
            Projects
          </a>
          <a
            href="#philosophy"
            onClick={(e) => handleLinkClick(e, 'philosophy')}
            className="editorial-title text-3xl font-light text-charcoal hover:text-gold transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className="editorial-title text-3xl font-light text-charcoal hover:text-gold transition-colors"
          >
            Services
          </a>
          <a
            href="#before-after"
            onClick={(e) => handleLinkClick(e, 'before-after')}
            className="editorial-title text-3xl font-light text-charcoal hover:text-gold transition-colors"
          >
            Transformations
          </a>
          
          <div className="pt-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="px-8 py-3 bg-gold text-charcoal text-sm uppercase tracking-widest rounded-full hover:bg-charcoal hover:text-ivory transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Consultation
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
