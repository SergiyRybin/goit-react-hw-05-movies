import FilmCard from '../FilmCard/FilmCard';
import s from '../FilmList/FilmList.module.css';

const FilmList = ({ data }) => {
  return (
    <ul className={s.FilmList}>
      {data && data.map(film => <FilmCard film={film} key={film.id} />)}
    </ul>
  );
};

export default FilmList;
