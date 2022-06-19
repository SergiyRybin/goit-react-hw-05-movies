import { fetchQuery } from 'servises/fetchRequaest';
import { useState, useEffect } from 'react';
import FilmList from '../FilmList/FilmList';
import Container from 'components/Container/Container';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const MovieSearch = () => {
  const q = useParams();
  console.log(q)
  const query = q.query.slice(6, q.query.length);
  const [filmsSearch, setFilmSearch] = useState([]);

  useEffect(() => {
    if (q) {
      fetchQuery(query).then(({ results }) => {
        if (results.length === 0) {
          return toast('Немає фільма за таким запитом');
        }
        setFilmSearch({ results });
      });
    }
  }, [q, query]);

  const data = filmsSearch.results;
  return (
    <>
      <Container>
        <FilmList data={data} />
      </Container>
    </>
  );
};

export default MovieSearch;
