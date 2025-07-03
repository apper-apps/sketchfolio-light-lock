import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import ApperIcon from '@/components/ApperIcon';

const Lightbox = ({ artwork, onClose, artworks, onNavigate }) => {
  const currentIndex = artworks.findIndex(a => a.Id === artwork.Id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < artworks.length - 1;

  const handlePrevious = useCallback(() => {
    if (hasPrevious) {
      onNavigate(artworks[currentIndex - 1]);
    }
  }, [currentIndex, hasPrevious, artworks, onNavigate]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      onNavigate(artworks[currentIndex + 1]);
    }
  }, [currentIndex, hasNext, artworks, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handlePrevious, handleNext, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 lightbox-overlay flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl max-h-[90vh] w-full bg-surface rounded-2xl overflow-hidden shadow-lifted"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-primary/80 text-surface rounded-full hover:bg-primary transition-colors"
        >
          <ApperIcon name="X" className="w-5 h-5" />
        </button>

        {/* Navigation buttons */}
        {hasPrevious && (
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-surface rounded-full hover:bg-primary transition-colors"
          >
            <ApperIcon name="ChevronLeft" className="w-5 h-5" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-surface rounded-full hover:bg-primary transition-colors"
          >
            <ApperIcon name="ChevronRight" className="w-5 h-5" />
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Image */}
          <div className="relative flex items-center justify-center bg-secondary p-8">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                {artwork.title}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <ApperIcon name="Brush" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">{artwork.medium}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <ApperIcon name="Calendar" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">{artwork.year}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <ApperIcon name="Ruler" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">{artwork.dimensions}</span>
                </div>
              </div>
              
              <p className="text-primary/80 leading-relaxed mb-6">
                {artwork.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {artwork.available && artwork.price && (
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                  <span className="text-primary font-medium">Price:</span>
                  <span className="font-display text-2xl font-bold text-accent">
                    ${artwork.price.toLocaleString()}
                  </span>
                </div>
              )}
              
              <button
                onClick={() => {
                  onClose();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105"
              >
                <ApperIcon name="MessageCircle" className="w-5 h-5" />
                Inquire About This Piece
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;