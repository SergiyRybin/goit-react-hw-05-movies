import { useState } from 'react';

import Container from 'components/Container/Container';
import Movie from 'components/Movie';
import MoviesBar from 'components/MoviesBar';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieForm = () => {
  const [query, setQuery] = useState('');

  const fromData = data => {
    if (data.length === 0) {
      return toast("Введіть назву філььма ")
    }
    setQuery(data);
  };

  return (
    <Container>
      <MoviesBar onSubmit={fromData} />
      <Movie query={query}/>
     
    </Container>
  );
};

export default MovieForm;
