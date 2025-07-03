import { motion } from 'framer-motion';

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: -30, rotateY: 10 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 200
      }}
      className="group cursor-pointer perspective-1000"
      onClick={() => onClick(artwork)}
      whileHover={{ 
        y: -15,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02
      }}
    >
      <motion.div 
        className="sketch-frame overflow-hidden relative transform-gpu"
        whileHover={{ 
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[3/4] overflow-hidden relative">
          <motion.img
            src={artwork.thumbnailUrl}
            alt={artwork.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.1) contrast(1.1)"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Enhanced Morphing Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 flex items-end justify-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ 
              opacity: 1, 
              y: 0,
              background: "linear-gradient(to top, rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.4), transparent)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center text-surface transform"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.h3 
                className="font-display text-xl font-bold mb-2"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 10px rgba(255, 255, 255, 0.8)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {artwork.title}
              </motion.h3>
              <p className="text-surface/80">{artwork.medium} • {artwork.year}</p>
              
              {/* Floating View Button */}
              <motion.div
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-lg border border-surface/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(212, 165, 116, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">View Details</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Border Effect */}
          <motion.div
            className="absolute inset-0 border-2 border-accent/0 rounded-lg pointer-events-none"
            whileHover={{ 
              borderColor: "rgba(212, 165, 116, 0.6)",
              boxShadow: "inset 0 0 20px rgba(212, 165, 116, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.h3 
          className="font-display text-lg font-semibold text-primary mb-1"
          whileHover={{ 
            scale: 1.05,
            color: "#d4a574"
          }}
          transition={{ duration: 0.2 }}
        >
          {artwork.title}
        </motion.h3>
        <motion.p 
          className="text-primary/70 text-sm"
          whileHover={{ color: "#1a1a1a" }}
          transition={{ duration: 0.2 }}
        >
          {artwork.medium} • {artwork.year}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ArtworkCard;