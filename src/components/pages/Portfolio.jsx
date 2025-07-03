import { useState, useEffect } from 'react';
import Hero from '@/components/organisms/Hero';
import Gallery from '@/components/organisms/Gallery';
import About from '@/components/organisms/About';
import Contact from '@/components/organisms/Contact';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { getArtworks } from '@/services/api/artworkService';

const Portfolio = () => {
  const [featuredArtwork, setFeaturedArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadFeaturedArtwork();
  }, []);

  const loadFeaturedArtwork = async () => {
    try {
      setLoading(true);
      setError('');
      const artworks = await getArtworks();
      // Get the first artwork as featured
      const featured = artworks.find(artwork => artwork.Id === 1) || artworks[0];
      setFeaturedArtwork(featured);
    } catch (err) {
      setError('Failed to load portfolio. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleScrollToGallery = () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadFeaturedArtwork} />;

  return (
    <div className="min-h-screen">
      <Hero 
        featuredArtwork={featuredArtwork} 
        onScrollToGallery={handleScrollToGallery}
      />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Portfolio;