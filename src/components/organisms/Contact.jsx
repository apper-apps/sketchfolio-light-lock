import { motion } from 'framer-motion';
import ContactForm from '@/components/molecules/ContactForm';
import ApperIcon from '@/components/ApperIcon';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background paper-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Whether you're interested in a custom portrait, purchasing existing artwork, or discussing a collaborative project, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-surface rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Commission Process
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Initial Consultation</h4>
                    <p className="text-primary/70 text-sm">We'll discuss your vision, timeline, and budget to ensure we're aligned on the project.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Sketch & Approval</h4>
                    <p className="text-primary/70 text-sm">I'll create initial sketches for your approval before proceeding to the final artwork.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Creation & Delivery</h4>
                    <p className="text-primary/70 text-sm">Once approved, I'll complete your artwork and arrange for safe delivery or pickup.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ApperIcon name="Mail" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">alexandra.chen.art@email.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <ApperIcon name="Phone" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <ApperIcon name="MapPin" className="w-5 h-5 text-accent" />
                  <span className="text-primary/70">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-primary/70 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;