import React, { useState, useRef, useEffect } from 'react';
import { Eye, MoveLeft, MoveRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Handle slide drag logic
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Automatic slow animation preview on scroll
  const triggerAutoSlide = () => {
    let current = sliderPosition;
    let direction = -0.5;
    const interval = setInterval(() => {
      current += direction;
      if (current <= 20) {
        direction = 0.5;
      } else if (current >= 80) {
        direction = -0.5;
      }
      setSliderPosition(current);
    }, 16);

    // Stop after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  };

  return (
    <section id="before-after" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
        <div className="lg:col-span-6 text-left">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">transformation</p>
          <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light leading-tight">
            The Power of <br /><span className="editorial-italic text-gold">Renovation</span>
          </h2>
        </div>
        <div className="lg:col-span-6 text-left lg:text-right flex items-center lg:justify-end gap-4">
          <p className="text-xs text-charcoal/60 font-light max-w-sm">
            Drag the gold central slider to explore the physical transformation from a heavy, outdated structure into our serene and modern bespoke limestone living concept.
          </p>
          <button
            onClick={triggerAutoSlide}
            className="flex items-center gap-2 px-4 py-2 bg-beige text-gold text-[10px] uppercase tracking-widest font-semibold rounded-full border border-stone/30 hover:border-gold transition-colors duration-300"
          >
            <Eye size={12} /> Auto View
          </button>
        </div>
      </div>

      {/* Main Interactive Slider */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone/30 select-none bg-stone custom-grab"
      >
        {/* BEFORE IMAGE (Default full display underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80"
            alt="Original Outdated Space"
            className="w-full h-full object-cover pointer-events-none"
          />
          {/* Static Outdated Label Overlay */}
          <div className="absolute bottom-6 left-6 bg-charcoal/80 text-white border border-white/10 px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm z-10 select-none">
            Original Space — 2021
          </div>
          <div className="absolute top-6 left-6 text-left text-white/50 text-xs tracking-wider max-w-xs z-10 pointer-events-none hidden md:block">
            <span className="font-serif italic text-lg text-white block mb-1">Heavy, Blocked, Dim</span>
            "The initial rooms lacked physical connections, and heavy cedar panelling blocked natural garden illumination."
          </div>
        </div>

        {/* AFTER IMAGE (Clipped overlay on top) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80"
            alt="Bespoke Aurelia Design"
            className="w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.clientWidth || '100%' }}
          />
          {/* Static Aurelia Label Overlay */}
          <div className="absolute bottom-6 right-6 bg-gold/90 text-charcoal px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold shadow-lg z-20 select-none">
            Aurelia Concept — 2023
          </div>
          <div className="absolute top-6 right-6 text-right text-charcoal/60 text-xs tracking-wider max-w-xs z-20 pointer-events-none hidden md:block">
            <span className="font-serif italic text-lg text-charcoal block mb-1">Elevated, Seamless, Serene</span>
            "Restructured with limestone plaster, structural voids, and panoramic openings showing pool reflections."
          </div>
        </div>

        {/* DRAGGABLE HANDLE LINE */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-gold z-30 cursor-ew-resize pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circle Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-ivory text-gold rounded-full flex items-center justify-between px-2.5 shadow-2xl border-2 border-gold pointer-events-none">
            <MoveLeft size={12} className="opacity-70" />
            <MoveRight size={12} className="opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};
