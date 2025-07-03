import { motion } from 'framer-motion';

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={() => onClick(artwork)}
    >
      <div className="sketch-frame overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={artwork.thumbnailUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-surface">
            <h3 className="font-display text-xl font-bold mb-2">{artwork.title}</h3>
            <p className="text-surface/80">{artwork.medium} • {artwork.year}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="font-display text-lg font-semibold text-primary mb-1">{artwork.title}</h3>
        <p className="text-primary/70 text-sm">{artwork.medium} • {artwork.year}</p>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;