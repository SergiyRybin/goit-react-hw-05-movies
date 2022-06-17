import s from '../FilmCard/FilmCard.module.css'


const FilmCard = ({film}) => {
  return (
    <li className={s.ListItem}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        alt=""
        className={s.ImageItem}
      />
      {film.title ? film.title : film.name}
    </li>
  );
};

export default FilmCard;
