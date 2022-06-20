import { Outlet, useLocation, useSearchParams } from 'react-router-dom';

const MoviesBar = () => {
  const [, setSearchFilm] = useSearchParams();
  

  const fromCahnge = e => {
    e.preventDefault();
    const nameValue = e.currentTarget.elements.query.value.toLowerCase().trim();
    setSearchFilm({ query: nameValue });

  };

  return (
    <>
      <header>
        <form onSubmit={fromCahnge}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default MoviesBar;
