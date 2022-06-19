import { fetchQuery } from 'servises/fetchRequaest';
import { useState, useEffect } from 'react';
import FilmList from './FilmList/FilmList';
import Container from 'components/Container/Container';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = ({ query }) => {
  const [filmsSearch, setFilmSearch] = useState([]);

  useEffect(() => {
    if (query) {
      fetchQuery(query).then(({ results }) => {
        if (results.length === 0) {
          return toast('Немає фільма за таким запитом');
        }
        setFilmSearch({ results });
      });
    }
  }, [filmsSearch.length, query]);

  const data = filmsSearch.results;
  return (
    <>
      <Container>
        <FilmList data={data} />
      </Container>
    </>
  );
};

export default Movie;
