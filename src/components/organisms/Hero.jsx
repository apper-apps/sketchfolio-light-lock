import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Portfolio from "@/components/pages/Portfolio";
import artworksData from "@/services/mockData/artworks.json";

const Hero = ({ featuredArtwork, onScrollToGallery }) => {
  return (
    <div className="relative h-screen overflow-hidden perspective-1000">
      {/* Enhanced 3D Parallax Background */}
      <motion.div 
        className="absolute inset-0 transform-gpu"
        initial={{ scale: 1.1, rotateX: 5 }}
        animate={{ scale: 1, rotateX: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img
          src={featuredArtwork?.imageUrl || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=faces'}
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
        
        {/* Animated Geometric Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute morphing-shape bg-accent/5"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
{/* Enhanced Creative Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => {
          const shapes = ['rounded-full', 'rounded-none', 'rounded-lg'];
          const sizes = ['w-2 h-2', 'w-3 h-3', 'w-1 h-4', 'w-4 h-1'];
          const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
          const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute ${randomSize} bg-surface/20 ${randomShape} morphing-shape`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 360, 720]
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Interactive Floating Ornaments */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ornament-${i}`}
            className="absolute floating hover-glow cursor-pointer"
            style={{
              left: `${15 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            whileHover={{ scale: 1.5, rotate: 180 }}
            onClick={() => {
              // Ripple effect on click
            }}
          >
            <div className="w-6 h-6 bg-accent/30 morphing-border"></div>
          </motion.div>
        ))}
      </div>
{/* Enhanced Content with 3D Effects */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 perspective-1000">
        <motion.div 
          className="text-surface transform-gpu"
          initial={{ rotateX: 15, y: 50 }}
          animate={{ rotateX: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Enhanced Typewriter Effect Title with Glow */}
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden text-glow"
            initial={{ width: 0, rotateY: -15 }}
            animate={{ width: "auto", rotateY: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(212, 165, 116, 1)"
            }}
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
            className="text-xl md:text-2xl mb-8 text-surface/90 max-w-2xl hover-lift"
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -5, textShadow: "0 5px 15px rgba(255, 255, 255, 0.2)" }}
          >
            Capturing life's moments through the delicate art of pencil and charcoal
          </motion.p>
<motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 165, 116, 0.3)",
                backgroundColor: "rgba(212, 165, 116, 0.9)",
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              onTap={() => {
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'absolute inset-0 bg-surface/30 rounded-lg animate-ripple pointer-events-none';
                event.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
              onClick={onScrollToGallery}
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg transition-all duration-300 hover:shadow-lifted morphing-border transform-gpu"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <ApperIcon name="Eye" className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">View Portfolio</span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#1a1a1a",
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                rotateY: -5
              }}
              whileTap={{ scale: 0.95 }}
              onTap={() => {
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'absolute inset-0 bg-accent/30 rounded-lg animate-ripple pointer-events-none';
                event.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 border-2 border-surface text-surface rounded-lg transition-all duration-300 morphing-border transform-gpu"
            >
              <motion.div
                className="absolute inset-0 bg-surface opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ApperIcon name="MessageCircle" className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Commission Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
{/* Enhanced Scroll Indicator with Pulse Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={onScrollToGallery}
      >
        <motion.div 
          className="flex flex-col items-center text-surface/80 hover:text-surface transition-colors hover-glow"
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <motion.span 
            className="text-sm mb-2 text-glow"
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
            {/* Multiple Pulsing Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-surface/20 rounded-full"
                animate={{ 
                  scale: [0, 3], 
                  opacity: [1, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Additional Creative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Accents */}
        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((position, i) => (
          <motion.div
            key={`corner-${i}`}
            className={`absolute ${position} w-8 h-8 border-2 border-accent/30 morphing-shape`}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;