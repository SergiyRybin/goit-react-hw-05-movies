import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByIdCast } from 'servises/fetchRequaest';
import iconNmae from 'images/1.jpeg'
import s from '../Cast/Cast.module.css';

 const Cast = () => {
  const [cast, setCast] = useState('');
  const id = useParams();

  if (cast.length === 0) {
    fetchByIdCast(id.id).then(data => setCast(data));
  }

  return (
    <div>
      <ul className={s.Cast}>
        {cast &&
          cast.cast.map(el => (
            <li key={el.id}>
              <img
                width="150"
                height="225"
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : iconNmae
                }
                alt={el.name}
              />
              <p>{el.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast
