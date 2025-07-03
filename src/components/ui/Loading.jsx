import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-background paper-texture relative overflow-hidden">
      {/* Floating Loading Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Hero Section Skeleton */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          className="skeleton-loading w-full h-full"
          animate={{
            background: [
              "linear-gradient(90deg, #f5f5f0 25%, #e8e8e8 50%, #f5f5f0 75%)",
              "linear-gradient(90deg, #e8e8e8 25%, #d4a574 50%, #e8e8e8 75%)",
              "linear-gradient(90deg, #f5f5f0 25%, #e8e8e8 50%, #f5f5f0 75%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60"></div>
        
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="skeleton-loading h-16 w-96 mx-auto mb-4 rounded"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="skeleton-loading h-8 w-64 mx-auto rounded"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Enhanced Gallery Section Skeleton */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            className="skeleton-loading h-12 w-48 mx-auto mb-4 rounded"
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div 
            className="skeleton-loading h-6 w-96 mx-auto rounded"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </div>

        {/* Enhanced Filter Bar Skeleton */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i} 
              className="skeleton-loading h-10 w-24 rounded-full"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 }
              }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced Gallery Grid Skeleton */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
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
              animate={{ 
                y: [0, -5, 0],
                rotateY: [0, 2, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              <motion.div 
                className="sketch-frame overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <motion.div 
                  className="skeleton-loading aspect-[3/4] w-full"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #f5f5f0 25%, #e8e8e8 50%, #f5f5f0 75%)",
                      "linear-gradient(90deg, #e8e8e8 25%, #d4a574 50%, #e8e8e8 75%)",
                      "linear-gradient(90deg, #f5f5f0 25%, #e8e8e8 50%, #f5f5f0 75%)"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </motion.div>
              <motion.div className="mt-4">
                <motion.div 
                  className="skeleton-loading h-6 w-3/4 mb-2 rounded"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="skeleton-loading h-4 w-1/2 rounded"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced About Section Skeleton */}
      <div className="bg-secondary py-20 relative overflow-hidden">
        {/* Floating Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-accent/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              className="skeleton-loading h-12 w-48 mx-auto mb-4 rounded"
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="skeleton-loading aspect-square w-full max-w-md mx-auto rounded-lg"
              animate={{ 
                scale: [1, 1.02, 1],
                rotateY: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i}
                  className={`skeleton-loading h-6 rounded ${
                    i === 0 ? 'w-full' : 
                    i === 1 ? 'w-5/6' : 
                    i === 2 ? 'w-4/5' : 
                    i === 3 ? 'w-full' : 'w-3/4'
                  }`}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Section Skeleton */}
      <div className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div 
              className="skeleton-loading h-12 w-64 mx-auto mb-4 rounded"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div 
              className="skeleton-loading h-6 w-96 mx-auto rounded"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {[12, 12, 12, 32, 12].map((height, i) => (
                <motion.div 
                  key={i}
                  className={`skeleton-loading h-${height} ${i === 4 ? 'w-32' : 'w-full'} rounded`}
                  variants={{
                    hidden: { scale: 0.9, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.01, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Central Loading Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center z-50"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" }
        }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;