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
    <section id="gallery" className="py-20 bg-background paper-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Explore my collection of sketches, each piece capturing the essence of its subject through careful observation and skilled technique.
          </p>
        </motion.div>

        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

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
          >
            <AnimatePresence>
              {filteredArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.Id}
                  artwork={artwork}
                  onClick={handleArtworkClick}
                />
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