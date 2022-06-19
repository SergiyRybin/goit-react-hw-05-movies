import { useState } from 'react';

const MoviesBar = ({ onSubmit }) => {
  const [film, setFilm] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(film);
    // setFilm('');
  };

  const fromCahnge = e => {
    const nameValue = e.currentTarget.value.toLowerCase().trim();
    setFilm(nameValue);
  };
  return (
    <header>
      <h1>Тут будуть філми</h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={fromCahnge}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default MoviesBar;
