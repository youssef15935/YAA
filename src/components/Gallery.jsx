import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Font from 'react-font';

const images = [
  { id: 1, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 1' },
  { id: 2, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 2' },
  { id: 3, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 3' },
  { id: 4, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 4' },
  { id: 5, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 5' },
  { id: 6, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 6' },
  { id: 7, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 7' },
  { id: 8, src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg', alt: 'Project 8' },
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Font family="Lato">
      <section className={`flex justify-center p-8 ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map(image => (
            <Link
              key={image.id}
              to={`/details/${image.id}`}
              className="relative bg-gray-100 overflow-hidden transform transition duration-300 hover:scale-102 hover:opacity-90 hover:filter-none filter grayscale group"
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </Link>
          ))}
        </div>
      </section>
    </Font>
  );
};

export default Gallery;
