import s from '../FilmCard/FilmCard.module.css';
import { Link, useLocation } from 'react-router-dom';

const FilmCard = ({ film }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <Link to={`/movies/${film.id}`} state={location.search}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt=""
        className={s.ImageItem}
      />
      {film.title ? film.title : film.name}
    </Link>
  );
};

export default FilmCard;
