import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  imageSmall: string;
  imageLarge: string;
  onClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSmall, imageLarge, onClick }) => {
  return (
    <div className={css.imageCard}>
      <img 
        src={imageSmall} 
        alt="" 
        className={css.image} 
        onClick={() => onClick(imageLarge)} 
      />
    </div>
  );
};

export default ImageCard;
