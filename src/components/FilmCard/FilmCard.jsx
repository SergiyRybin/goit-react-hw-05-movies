import s from '../FilmCard/FilmCard.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconNmae from 'images/2.jpeg';

const FilmCard = ({ film }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${film.id}`} state={location.search}>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
            : iconNmae
        }
        alt={film.title ? film.title : film.name}
        className={s.ImageItem}
      />
      {film.title ? film.title : film.name}
    </Link>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;
