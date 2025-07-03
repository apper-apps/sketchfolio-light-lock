import mockArtworks from '@/services/mockData/artworks.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getArtworks = async () => {
  await delay(300);
  return [...mockArtworks];
};

export const getArtworkById = async (id) => {
  await delay(200);
  const artwork = mockArtworks.find(artwork => artwork.Id === parseInt(id));
  if (!artwork) {
    throw new Error('Artwork not found');
  }
  return { ...artwork };
};

export const getArtworksByFilter = async (filter) => {
  await delay(250);
  if (filter === 'all') {
    return [...mockArtworks];
  }
  
  return mockArtworks.filter(artwork => 
    artwork.medium.toLowerCase().includes(filter.toLowerCase()) ||
    artwork.subject.toLowerCase().includes(filter.toLowerCase())
  );
};