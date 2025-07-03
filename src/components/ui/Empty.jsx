import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = "No artwork found", 
  description = "Try adjusting your filters or check back later for new pieces.",
  actionText = "View All Artwork",
  onAction 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <div className="bg-surface rounded-2xl p-12 shadow-soft max-w-md mx-auto">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="Palette" className="w-10 h-10 text-accent" />
        </div>
        
        <h3 className="font-display text-2xl font-bold text-primary mb-4">
          {title}
        </h3>
        
        <p className="text-primary/70 mb-8 leading-relaxed">
          {description}
        </p>
        
        {onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-soft"
          >
            <ApperIcon name="Eye" className="w-4 h-4" />
            {actionText}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Empty;