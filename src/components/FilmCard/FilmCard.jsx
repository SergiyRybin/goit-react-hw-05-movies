import s from '../FilmCard/FilmCard.module.css';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
  return (
    <Link to={`/movies/${film.id}`}>
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
