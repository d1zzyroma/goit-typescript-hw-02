import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { searchImages } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import { Circles } from 'react-loader-spinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


interface ImageData {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description?: string; // alt_description може бути відсутнім
}


interface ErrorState {
  message: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getImagesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await searchImages(query, page);
        setData(prevData => [...prevData, ...response]);
        console.log(response);
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
          setError({ message: error.message });
        } else {
          setError({ message: 'An unknown error occurred.' });
        }
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getImagesData();
    }
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />

      {error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <ImageGallery data={data} onImageClick={handleImageClick} />
          {data.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      {loading && (
        <div className={css.load}>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default App;
