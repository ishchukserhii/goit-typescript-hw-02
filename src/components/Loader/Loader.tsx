import React from 'react';
import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return <BeatLoader className={css.loader} />;
};

export default Loader;
