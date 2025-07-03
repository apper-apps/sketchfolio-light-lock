import { motion } from 'framer-motion';

const FilterBar = ({ 
  filters, 
  activeFilter, 
  onFilterChange 
}) => {
return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
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
      {filters.map((filter, index) => (
        <motion.button
          key={filter.value}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              scale: 0.8
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 200
              }
            }
          }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.value)}
          className={`group relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter.value
              ? 'bg-accent text-surface shadow-soft'
              : 'bg-surface text-primary hover:bg-accent/10 hover:shadow-soft'
          }`}
        >
          {/* Morphing Background Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 opacity-0"
            whileHover={{ 
              opacity: activeFilter === filter.value ? 0 : 1,
              scale: 1.1
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Active State Glow */}
          {activeFilter === filter.value && (
            <motion.div
              className="absolute inset-0 bg-accent"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 rounded-full"
            whileTap={{ 
              scale: [0, 4],
              opacity: [0.3, 0],
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Text Content */}
          <motion.span 
            className="relative z-10"
            whileHover={{ 
              y: -1,
              textShadow: activeFilter === filter.value ? "none" : "0 2px 4px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            {filter.label}
          </motion.span>
          
          {/* Selection Indicator */}
          {activeFilter === filter.value && (
            <motion.div
              className="absolute -bottom-1 left-1/2 w-2 h-2 bg-surface rounded-full"
              initial={{ scale: 0, x: "-50%" }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 25 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterBar;