import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            About the Artist
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lifted">
              <img
                src="/api/placeholder/500/500"
                alt="Alexandra Chen - Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Alexandra Chen
              </h3>
              <p className="text-primary/70 leading-relaxed mb-6">
                For over a decade, I've been captivated by the raw beauty of graphite and charcoal on paper. My journey as a sketch artist began in the quiet corners of coffee shops and parks, where I found myself drawn to capture the fleeting moments of everyday life.
              </p>
              <p className="text-primary/70 leading-relaxed mb-6">
                What started as a personal exploration has evolved into a passionate pursuit of portraiture and observational drawing. Each piece I create is a meditation on light, shadow, and the subtle expressions that make us human.
              </p>
              <p className="text-primary/70 leading-relaxed">
                I believe that in our digital age, there's something profound about the tactile connection between artist, tool, and paper. Every stroke tells a story, every smudge carries emotion, and every finished piece is a moment preserved in time.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl font-semibold text-primary">
                Specialties
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <ApperIcon name="User" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">Portrait Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <ApperIcon name="Mountain" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">Landscape Sketches</span>
                </div>
                <div className="flex items-center gap-3">
                  <ApperIcon name="Coffee" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">Still Life</span>
                </div>
                <div className="flex items-center gap-3">
                  <ApperIcon name="Users" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">Figure Drawing</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-soft"
              >
                <ApperIcon name="MessageCircle" className="w-5 h-5" />
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;