import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('input-images') as HTMLInputElement;
    const inputValue = input.value.trim();

    if (inputValue.length > 0) {
      onSearch(inputValue);
    } else {
      toast.error('Заповни поле пошуку');
    }
  };

  return (
    <header className={css.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          name="input-images"
          className={css.input}
        />
        <button type="submit" className={css.btn}>Load</button>
      </form>
    </header>
  );
};

export default SearchBar;
