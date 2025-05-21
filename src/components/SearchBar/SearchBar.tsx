import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface Props {
  onSubmit: (value: string) => void;
  setPage: (page: number) => void;
  setImg: (img: any[]) => void; 
}

const SearchBar: React.FC<Props> = ({ onSubmit, setPage, setImg }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = (form.elements.namedItem('searchValue') as HTMLInputElement).value.trim();
    if (searchValue === '') {
      toast.error('Error', { position: 'top-right' });
      return;
    }
    setImg([]);
    setPage(1);
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
