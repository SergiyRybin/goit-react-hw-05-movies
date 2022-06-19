import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MoviesBar = () => {
  const query = useParams();
  console.log(query)
  
  const [film, setFilm] = useState('');
  const fromCahnge = e => {
    const nameValue = e.currentTarget.value.toLowerCase().trim();

    setFilm(nameValue);
  };
  return (
    <>
      <header>
        <form>
          <input
            onChange={fromCahnge}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <NavLink to={`/movies/query/:query=${film}`}>
            <button type="submit">
              <span>Search</span>
            </button>
          </NavLink>
        </form>
      </header>
    </>
  );
};

export default MoviesBar;
