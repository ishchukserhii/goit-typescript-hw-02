import React from 'react';

interface Props {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ loadMore }) => {
  return <button onClick={loadMore}>Load more</button>;
};

export default LoadMoreBtn;
