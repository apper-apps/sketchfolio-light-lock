import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from '@/components/molecules/ArtworkCard';
import FilterBar from '@/components/molecules/FilterBar';
import Lightbox from '@/components/organisms/Lightbox';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getArtworks } from '@/services/api/artworkService';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'portrait', label: 'Portraits' },
    { value: 'landscape', label: 'Landscapes' },
    { value: 'still-life', label: 'Still Life' },
    { value: 'pencil', label: 'Pencil' },
    { value: 'charcoal', label: 'Charcoal' },
    { value: 'ink', label: 'Ink' }
  ];

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getArtworks();
      setArtworks(data);
    } catch (err) {
      setError('Failed to load artworks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredArtworks = artworks.filter(artwork => {
    if (activeFilter === 'all') return true;
    return artwork.medium.toLowerCase().includes(activeFilter.toLowerCase()) ||
           artwork.subject.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseLightbox = () => {
    setSelectedArtwork(null);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadArtworks} />;

return (
    <section id="gallery" className="relative py-20 bg-background paper-texture overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-accent/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(212, 165, 116, 0)",
                  "0 0 20px rgba(212, 165, 116, 0.5)",
                  "0 0 0px rgba(212, 165, 116, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Portfolio
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my collection of sketches, each piece capturing the essence of its subject through careful observation and skilled technique.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </motion.div>

        {filteredArtworks.length === 0 ? (
          <Empty
            title="No artwork found"
            description="Try adjusting your filters or check back later for new pieces."
            actionText="View All Artwork"
            onAction={() => setActiveFilter('all')}
          />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.Id}
                  layout
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 50,
                      scale: 0.8,
                      rotateY: -10
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                      }
                    }
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: -50,
                    transition: { duration: 0.2 }
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ArtworkCard
                    artwork={artwork}
                    onClick={handleArtworkClick}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedArtwork && (
            <Lightbox
              artwork={selectedArtwork}
              onClose={handleCloseLightbox}
              artworks={filteredArtworks}
              onNavigate={setSelectedArtwork}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;