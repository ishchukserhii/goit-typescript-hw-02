import React from 'react';
import { ImgRespons } from '../../types';
import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface Props {
  img: ImgRespons[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<Props> = ({ img, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {img.map((image) => (
        <li key={image.id} className={css.card}>
          <ImageCard
            img={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.regular)}
            style={{ cursor: 'zoom-in' }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
