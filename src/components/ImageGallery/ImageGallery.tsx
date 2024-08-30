import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageData {
  id: string;
  urls: {
    small: string;
    full: string;
  };
}

interface ImageGalleryProps {
  data: ImageData[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {data.map((element) => (
        <li key={element.id}>
          <ImageCard 
            imageSmall={element.urls.small} 
            imageLarge={element.urls.full} 
            onClick={onImageClick} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
