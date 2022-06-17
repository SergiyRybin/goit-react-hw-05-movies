import fetchDataImage from 'servises/fetchRequaest';
import { useState, useEffect } from 'react';
import FilmCard from '../FilmCard/FilmCard';

import s from '../FilmList/FilmList.module.css'

const FilmList = () => {
  const [films, setFilm] = useState([]);

  useEffect(() => {
    if (films.length === 0) {
      fetchDataImage().then(({ results }) => setFilm({ results }));
    }
  }, [films]);
  const data = films.results;

  return (
    
    <ul className={s.FilmList}>{data && data.map(film => (<FilmCard film={film} key={film.id} />))}</ul>
   
  );
};

export default FilmList;
