import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-surface hover:bg-accent/90 focus:ring-accent",
    secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-surface focus:ring-accent",
    outline: "border-2 border-primary/20 text-primary hover:border-accent hover:text-accent focus:ring-accent",
    ghost: "text-primary hover:bg-accent/10 focus:ring-accent"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105";
  
return (
    <motion.button
      whileHover={!disabled ? { 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className} relative overflow-hidden group`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* Animated Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 rounded-full"
        whileTap={{ 
          scale: [0, 4],
          opacity: [0.3, 0],
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Content */}
      <motion.span 
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default Button;