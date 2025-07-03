import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Hero = ({ featuredArtwork, onScrollToGallery }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img
          src={featuredArtwork?.imageUrl || '/api/placeholder/1920/1080'}
          alt={featuredArtwork?.title || 'Featured artwork'}
          className="w-full h-full object-cover"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-surface/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div className="text-surface">
          {/* Typewriter Effect Title */}
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.1,
                repeat: 3,
                repeatType: "reverse",
                delay: 2
              }}
            >
              Alexandra Chen
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 text-surface/90 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Capturing life's moments through the delicate art of pencil and charcoal
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 165, 116, 0.3)",
                backgroundColor: "rgba(212, 165, 116, 0.9)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onScrollToGallery}
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg transition-all duration-300 hover:shadow-lifted"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <ApperIcon name="Eye" className="w-5 h-5 relative z-10" />
              <span className="relative z-10">View Portfolio</span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#1a1a1a",
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 border-2 border-surface text-surface rounded-lg transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-surface opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <ApperIcon name="MessageCircle" className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Commission Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={onScrollToGallery}
      >
        <motion.div 
          className="flex flex-col items-center text-surface/80 hover:text-surface transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-sm mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <ApperIcon name="ChevronDown" className="w-6 h-6" />
            <motion.div
              className="absolute inset-0 bg-surface/20 rounded-full"
              animate={{ scale: [0, 2], opacity: [1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;