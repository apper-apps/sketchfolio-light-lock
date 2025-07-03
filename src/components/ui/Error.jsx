import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-background paper-texture flex items-center justify-center relative overflow-hidden">
      {/* Floating Error Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-error/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", damping: 25 }}
        className="text-center max-w-md mx-auto px-4 relative z-10"
      >
        <motion.div 
          className="bg-surface rounded-2xl p-8 shadow-lifted relative overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-error/5 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div 
            className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ApperIcon name="AlertCircle" className="w-8 h-8 text-error" />
            </motion.div>
            
            {/* Pulsing Ring Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-error/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="font-display text-2xl font-bold text-primary mb-4 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Oops! Something went wrong
          </motion.h2>
          
          <motion.p 
            className="text-primary/70 mb-6 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {message}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {onRetry && (
              <motion.button
                onClick={onRetry}
                className="group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(212, 165, 116, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <ApperIcon name="RefreshCw" className="w-4 h-4 relative z-10" />
                </motion.div>
                <span className="relative z-10">Try Again</span>
              </motion.button>
            )}
            
            <motion.button
              onClick={() => window.location.reload()}
              className="group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#d4a574",
                color: "#ffffff",
                borderColor: "#d4a574"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-accent opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <ApperIcon name="Home" className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Refresh Page</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error;