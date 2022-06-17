import { useState, useEffect } from 'react';
import fetchDataImage from 'servises/fetchRequaest';

import Container from 'components/Container/Container';
import Movie from 'pages/Movie';
import MoviesBar from 'pages/MoviesBar';

const MovieForm = () => {
  const [query, setQuery] = useState('');

  const fromData = data => {
    if (data.length === 0) {
      return;
    }
    setQuery(data);
    
  };
  useEffect(() => {
    if (query) {
      fetchDataImage().then((data) => console.log(data));
    }
  }, [query]);

  return (
    <Container>
      <MoviesBar onSubmit={fromData} />
      <Movie />
    </Container>
  );
};

export default MovieForm;
