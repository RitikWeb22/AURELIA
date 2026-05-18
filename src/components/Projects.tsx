import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MapPin, Layers, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'residential' | 'luxury villas' | 'hospitality' | 'penthouses' | 'modern commercial';
  location: string;
  image: string;
  additionalImages: string[];
  area: string;
  year: string;
  materials: string[];
  description: string;
  colSpan: string; // Bento layout column span helper
  height: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'The Glass Villa',
    category: 'luxury villas',
    location: 'Lake Como, Italy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
    additionalImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=90'
    ],
    area: '480 m²',
    year: '2024',
    materials: ['Sabbia Travertine', 'Brushed Brass', 'Fluted Oak', 'Triple-glaze Structural Glass'],
    description: 'An architectural masterpiece blending seamless indoor-outdoor living. Surrounded by lush hills and overlooking the deep blue waters of Como, the project utilizes continuous stone planes and minimal structural limits to capture floating views of nature.',
    colSpan: 'md:col-span-2',
    height: 'h-[400px] md:h-[600px]',
  },
  {
    id: '2',
    title: 'Beige Limestone Loft',
    category: 'penthouses',
    location: 'Soho, New York',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=90',
    additionalImages: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=90'
    ],
    area: '260 m²',
    year: '2023',
    materials: ['Limestone Plaster', 'Cast Bronze', 'Bouclé Fabrics', 'Belgium Linen'],
    description: 'A serene urban sanctuary amidst the vibrant Soho streets. Characterized by double-height industrial windows, textured plaster walls, and low-slung custom furniture that grounds the expansive space in deep warmth and quiet luxury.',
    colSpan: 'md:col-span-1',
    height: 'h-[400px] md:h-[600px]',
  },
  {
    id: '3',
    title: 'Amara Wellness Resort',
    category: 'hospitality',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=90',
    additionalImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90'
    ],
    area: '3,200 m²',
    year: '2024',
    materials: ['Desert Sandstone', 'Water Features', 'Oxidized Copper', 'Cedarwood Panels'],
    description: 'A holistic hospitality escape integrating modern Middle-Eastern architectural forms with ultra-minimal design principles. Built around peaceful reflection pools, natural sunlight filters through intricate custom screens to paint slow shadow art.',
    colSpan: 'md:col-span-1',
    height: 'h-[400px]',
  },
  {
    id: '4',
    title: 'Minimalist Penthouse Residence',
    category: 'residential',
    location: 'Brera, Milan',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=90',
    additionalImages: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=90'
    ],
    area: '180 m²',
    year: '2022',
    materials: ['Calacatta Viola Marble', 'Matte Lacquer', 'Smoked Oak', 'Bronze hardware'],
    description: 'An art collector’s apartment defined by sculptural stone monolithic features, floating gallery walls, and integrated hidden architectural lighting that mimics soft afternoon gallery conditions.',
    colSpan: 'md:col-span-2',
    height: 'h-[400px]',
  }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const categories = ['all', 'residential', 'luxury villas', 'hospitality', 'penthouses'];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="showcase" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone/20">
      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
        <div className="lg:col-span-6 text-left">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">curated portfolio</p>
          <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-charcoal font-light">
            Architectural <br /><span className="editorial-italic text-gold">Masterpieces</span>
          </h2>
        </div>
        <div className="lg:col-span-6 flex flex-wrap justify-start lg:justify-end gap-2 md:gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 font-semibold border ${
                activeCategory === category
                  ? 'bg-charcoal text-ivory border-charcoal'
                  : 'bg-transparent text-charcoal/70 border-stone/40 hover:border-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className={`${project.colSpan} ${project.height} group relative overflow-hidden rounded-[2rem] border border-stone/20 shadow-lg cursor-pointer bg-stone`}
              onClick={() => {
                setSelectedProject(project);
                setLightboxImageIndex(0);
              }}
            >
              {/* Image Frame */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Luxury Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Delicate Gold Architectural Outline (Hover Effect) */}
              <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 rounded-[1.5rem] transition-all duration-500 pointer-events-none" />

              {/* Text Card overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left text-white z-10 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-semibold bg-charcoal/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-light mt-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-ivory/70 font-light mt-1.5">
                    <MapPin size={11} className="text-gold" />
                    {project.location}
                  </div>
                </div>
                
                {/* Arrow Icon */}
                <div className="w-10 h-10 bg-ivory text-charcoal rounded-full flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 backdrop-blur-md p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="bg-ivory w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-stone/30 relative flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-charcoal text-ivory flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Media Section */}
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col gap-4">
                  <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-stone border border-stone/20 relative">
                    <img
                      src={lightboxImageIndex === 0 ? selectedProject.image : selectedProject.additionalImages[lightboxImageIndex - 1]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnail Selector */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setLightboxImageIndex(0)}
                      className={`w-20 aspect-[16/10] rounded-xl overflow-hidden border-2 ${
                        lightboxImageIndex === 0 ? 'border-gold' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={selectedProject.image} alt="Thumbnail 0" className="w-full h-full object-cover" />
                    </button>
                    {selectedProject.additionalImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightboxImageIndex(idx + 1)}
                        className={`w-20 aspect-[16/10] rounded-xl overflow-hidden border-2 ${
                          lightboxImageIndex === idx + 1 ? 'border-gold' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specs Section */}
                <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between text-left bg-beige/30 border-l border-stone/20">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold bg-charcoal/5 px-3 py-1 rounded-full border border-stone/50">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-serif text-3xl font-light text-charcoal mt-4 leading-tight">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal/60 font-light mt-2">
                        <MapPin size={12} className="text-gold" />
                        {selectedProject.location}
                      </div>
                    </div>

                    <p className="text-sm text-charcoal/80 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Metadata grids */}
                    <div className="grid grid-cols-2 gap-4 border-y border-stone/30 py-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-charcoal/40 text-[9px] uppercase tracking-widest font-bold">
                          <Layers size={10} className="text-gold" /> Area
                        </div>
                        <p className="text-sm font-medium text-charcoal mt-1">{selectedProject.area}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-charcoal/40 text-[9px] uppercase tracking-widest font-bold">
                          <Award size={10} className="text-gold" /> Completed
                        </div>
                        <p className="text-sm font-medium text-charcoal mt-1">{selectedProject.year}</p>
                      </div>
                    </div>

                    {/* Material List */}
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-charcoal/50 mb-2">Signature Materials</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.materials.map((m, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-charcoal/70 bg-stone/20 border border-stone/40 px-2.5 py-1 rounded-md font-light"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => alert(`A dossier and physical folder sample set for '${selectedProject.title}' has been queued for request. A studio director will contact you.`)}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      Request Portfolio Booklet
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
