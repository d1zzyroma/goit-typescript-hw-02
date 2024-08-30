import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.loaderWrapper}>
        <button className={css.loadMore} onClick={onClick}>
          Load more
        </button>
    </div>
  );
};

export default LoadMoreBtn;
