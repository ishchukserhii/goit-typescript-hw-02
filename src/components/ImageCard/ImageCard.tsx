import React, { CSSProperties } from 'react';
import css from './ImageCard.module.css';

interface Props {
  img: string;
  alt: string;
  onClick: () => void;
  style?: CSSProperties;
}

export const ImageCard: React.FC<Props> = ({ img, alt, onClick, style }) => {
  return (
    <div>
      <img className={css.cardImg} src={img} alt={alt} onClick={onClick} style={style} />
    </div>
  );
};
