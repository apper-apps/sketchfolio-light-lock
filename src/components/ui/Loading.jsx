import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-background paper-texture">
      {/* Hero Section Skeleton */}
      <div className="relative h-screen overflow-hidden">
        <div className="skeleton-loading w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="skeleton-loading h-16 w-96 mx-auto mb-4 rounded"></div>
          <div className="skeleton-loading h-8 w-64 mx-auto rounded"></div>
        </div>
      </div>

      {/* Gallery Section Skeleton */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="skeleton-loading h-12 w-48 mx-auto mb-4 rounded"></div>
          <div className="skeleton-loading h-6 w-96 mx-auto rounded"></div>
        </div>

        {/* Filter Bar Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-loading h-10 w-24 rounded-full"></div>
          ))}
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="sketch-frame overflow-hidden">
                <div className="skeleton-loading aspect-[3/4] w-full"></div>
              </div>
              <div className="mt-4">
                <div className="skeleton-loading h-6 w-3/4 mb-2 rounded"></div>
                <div className="skeleton-loading h-4 w-1/2 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section Skeleton */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="skeleton-loading h-12 w-48 mx-auto mb-4 rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="skeleton-loading aspect-square w-full max-w-md mx-auto rounded-lg"></div>
            <div className="space-y-4">
              <div className="skeleton-loading h-6 w-full rounded"></div>
              <div className="skeleton-loading h-6 w-5/6 rounded"></div>
              <div className="skeleton-loading h-6 w-4/5 rounded"></div>
              <div className="skeleton-loading h-6 w-full rounded"></div>
              <div className="skeleton-loading h-6 w-3/4 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section Skeleton */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="skeleton-loading h-12 w-64 mx-auto mb-4 rounded"></div>
            <div className="skeleton-loading h-6 w-96 mx-auto rounded"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="skeleton-loading h-12 w-full rounded"></div>
              <div className="skeleton-loading h-12 w-full rounded"></div>
              <div className="skeleton-loading h-12 w-full rounded"></div>
              <div className="skeleton-loading h-32 w-full rounded"></div>
              <div className="skeleton-loading h-12 w-32 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;