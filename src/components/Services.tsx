import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Paintbrush, 
  Hotel, 
  Armchair, 
  Maximize2 
} from 'lucide-react';

interface Service {
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const SERVICES_DATA: Service[] = [
  {
    number: '01',
    title: 'Interior Architecture & Design',
    icon: <Paintbrush size={22} className="text-gold" />,
    description: 'Comprehensive design concepts detailing permanent custom textures, moldings, custom doors, lighting configurations, and materials.',
    details: ['3D spatial simulations', 'Lighting design schematics', 'Material sourcing & specification'],
  },
  {
    number: '02',
    title: 'Sartorial Furniture & Styling',
    icon: <Armchair size={22} className="text-gold" />,
    description: 'Bespoke curation and design of furniture pieces, lighting fixtures, custom upholstery, rugs, and decorative collectibles.',
    details: ['Bespoke furniture designs', 'Global antique sourcing', 'Textile curation & styling'],
  },
  {
    number: '03',
    title: 'Space Planning & Optimization',
    icon: <Compass size={22} className="text-gold" />,
    description: 'Sophisticated spatial configuration and flow design to maximize aesthetic sightlines, natural circulation, and volume efficiency.',
    details: ['Asymmetric layout mappings', 'Circulation analysis', 'Sightline design planning'],
  },
  {
    number: '04',
    title: 'Hospitality Architecture',
    icon: <Hotel size={22} className="text-gold" />,
    description: 'Creating memorable commercial experiences for luxury hotels, boutique spas, fine dining hubs, and modern lounge spaces.',
    details: ['Branded sensory zoning', 'Spas & wellness planning', 'Flow & scale optimization'],
  },
  {
    number: '05',
    title: 'Luxury Renovations',
    icon: <Layers size={22} className="text-gold" />,
    description: 'Master transformation of outdated structural estates, historical houses, or penthouses into high-end architectural masterpieces.',
    details: ['Historical preservation', 'Structural redesign', 'Permit & project oversight'],
  },
  {
    number: '06',
    title: 'Architectural Consultation',
    icon: <Maximize2 size={22} className="text-gold" />,
    description: 'Expert consultation on architectural designs, site selection, envelope analysis, and strategic developer collaborations.',
    details: ['Site sun path analysis', 'Material integrity review', 'Developer design guidelines'],
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone/20 bg-beige/10">
      {/* Section Title */}
      <div className="text-left mb-16">
        <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">capabilities</p>
        <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light">
          Signature <br /><span className="editorial-italic text-gold">Services</span>
        </h2>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
            className="group relative p-8 bg-ivory rounded-[2rem] border border-stone/30 shadow-md hover:shadow-xl hover:border-gold/40 transition-all duration-500 flex flex-col justify-between text-left overflow-hidden min-h-[340px]"
          >
            {/* Subtle glow filter inside */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-gold/5 rounded-full filter blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-3xl font-light text-stone tracking-wider group-hover:text-gold transition-colors duration-300">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center border border-stone/20">
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs text-charcoal/70 font-light leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Capability subdetails expandable */}
            <div className="border-t border-stone/20 pt-4 mt-auto">
              <ul className="space-y-2">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-[10px] text-charcoal/50 uppercase tracking-widest font-light">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
