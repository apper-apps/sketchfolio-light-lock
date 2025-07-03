import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-secondary overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-accent/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
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
                background: ["linear-gradient(45deg, #1a1a1a, #d4a574)", "linear-gradient(45deg, #d4a574, #1a1a1a)", "linear-gradient(45deg, #1a1a1a, #d4a574)"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-clip-text text-transparent"
            >
              About the Artist
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced Artist Portrait */}
            <motion.div 
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lifted group"
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://via.placeholder.com/500x500/d4a574/ffffff?text=Alexandra+Chen"
                alt="Alexandra Chen - Artist"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={e => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
                whileHover={{ filter: "sepia(0.2) contrast(1.1)" }}
              />
              <div
                className="w-full h-full bg-accent/10 flex items-center justify-center text-accent font-medium"
                style={{ display: "none" }}
              >
                Artist Portrait
              </div>
              
              {/* Floating Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-accent/50 rounded-2xl"
                animate={{ 
                  rotate: [0, 1, -1, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating Art Tools */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center"
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ApperIcon name="Brush" className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Alexandra Chen
              </h3>
              
              <motion.div className="space-y-6">
                {[
                  "For over a decade, I've been captivated by the raw beauty of graphite and charcoal on paper. My journey as a sketch artist began in the quiet corners of coffee shops and parks, where I found myself drawn to capture the fleeting moments of everyday life.",
                  "What started as a personal exploration has evolved into a passionate pursuit of portraiture and observational drawing. Each piece I create is a meditation on light, shadow, and the subtle expressions that make us human.",
                  "I believe that in our digital age, there's something profound about the tactile connection between artist, tool, and paper. Every stroke tells a story, every smudge carries emotion, and every finished piece is a moment preserved in time."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-primary/70 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h4 className="font-display text-xl font-semibold text-primary">
                Specialties
              </h4>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: "User", text: "Portrait Studies" },
                  { icon: "Mountain", text: "Landscape Sketches" },
                  { icon: "Coffee", text: "Still Life" },
                  { icon: "Users", text: "Figure Drawing" }
                ].map((specialty, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 group"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        backgroundColor: "rgba(212, 165, 116, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="p-1 rounded-full"
                    >
                      <ApperIcon name={specialty.icon} className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-primary/70 group-hover:text-primary transition-colors">
                      {specialty.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(212, 165, 116, 0.3)",
                  background: "linear-gradient(45deg, #d4a574, #c19660)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact").scrollIntoView({
                  behavior: "smooth"
                })}
                className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg transition-all duration-300 hover:shadow-soft"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <ApperIcon name="MessageCircle" className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Let's Work Together</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;