import { motion } from 'framer-motion';

const FilterBar = ({ 
  filters, 
  activeFilter, 
  onFilterChange 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            activeFilter === filter.value
              ? 'bg-accent text-surface shadow-soft'
              : 'bg-surface text-primary hover:bg-accent/10 hover:shadow-soft'
          }`}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterBar;