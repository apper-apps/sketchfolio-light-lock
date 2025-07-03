import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Hero = ({ featuredArtwork, onScrollToGallery }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredArtwork?.imageUrl || '/api/placeholder/1920/1080'}
          alt={featuredArtwork?.title || 'Featured artwork'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-surface"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Alexandra Chen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-surface/90 max-w-2xl">
            Capturing life's moments through the delicate art of pencil and charcoal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onScrollToGallery}
              className="flex items-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lifted"
            >
              <ApperIcon name="Eye" className="w-5 h-5" />
              View Portfolio
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 border-2 border-surface text-surface rounded-lg hover:bg-surface hover:text-primary transition-all duration-200"
            >
              <ApperIcon name="MessageCircle" className="w-5 h-5" />
              Commission Work
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={onScrollToGallery}
      >
        <div className="flex flex-col items-center text-surface/80 hover:text-surface transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ApperIcon name="ChevronDown" className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;