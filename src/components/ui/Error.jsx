import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-background paper-texture flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="bg-surface rounded-2xl p-8 shadow-lifted">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertCircle" className="w-8 h-8 text-error" />
          </div>
          
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Oops! Something went wrong
          </h2>
          
          <p className="text-primary/70 mb-6 leading-relaxed">
            {message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-soft"
              >
                <ApperIcon name="RefreshCw" className="w-4 h-4" />
                Try Again
              </button>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-surface transition-all duration-200 hover:scale-105"
            >
              <ApperIcon name="Home" className="w-4 h-4" />
              Refresh Page
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Error;