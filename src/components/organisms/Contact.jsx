import { motion } from 'framer-motion';
import ContactForm from '@/components/molecules/ContactForm';
import ApperIcon from '@/components/ApperIcon';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-background paper-texture overflow-hidden">
      {/* Floating Contact Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-accent/20"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          >
            <ApperIcon 
              name={['Mail', 'Phone', 'MessageCircle', 'Heart', 'Star', 'Brush'][i]} 
              className="w-full h-full"
            />
          </motion.div>
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
                color: ["#1a1a1a", "#d4a574", "#1a1a1a"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Let's Create Together
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Whether you're interested in a custom portrait, purchasing existing artwork, or discussing a collaborative project, I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-surface rounded-2xl p-8 shadow-soft relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="font-display text-2xl font-bold text-primary mb-6 relative z-10">
                Commission Process
              </h3>
              
              <motion.div 
                className="space-y-6 relative z-10"
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
                  {
                    num: "1",
                    title: "Initial Consultation",
                    desc: "We'll discuss your vision, timeline, and budget to ensure we're aligned on the project."
                  },
                  {
                    num: "2", 
                    title: "Sketch & Approval",
                    desc: "I'll create initial sketches for your approval before proceeding to the final artwork."
                  },
                  {
                    num: "3",
                    title: "Creation & Delivery", 
                    desc: "Once approved, I'll complete your artwork and arrange for safe delivery or pickup."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group/step"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-bold relative"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        backgroundColor: "#c19660"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.num}
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-full"
                        animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                    <div className="group-hover/step:translate-x-1 transition-transform">
                      <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                      <p className="text-primary/70 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-surface rounded-2xl p-8 shadow-soft relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="font-display text-2xl font-bold text-primary mb-6 relative z-10">
                Get In Touch
              </h3>
              
              <motion.div 
                className="space-y-4 relative z-10"
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
                  { icon: "Mail", text: "alexandra.chen.art@email.com" },
                  { icon: "Phone", text: "+1 (555) 123-4567" },
                  { icon: "MapPin", text: "San Francisco, CA" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 group/contact"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5 }}
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
                      <ApperIcon name={contact.icon} className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-primary/70 group-hover/contact:text-primary transition-colors">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-6 pt-6 border-t border-primary/10 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-primary/70 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;