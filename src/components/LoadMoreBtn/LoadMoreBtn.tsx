import React from 'react';
import css from './LoadMoreBtn.module.css';


interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loaderWrapper}>
      <button className={css.loadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
