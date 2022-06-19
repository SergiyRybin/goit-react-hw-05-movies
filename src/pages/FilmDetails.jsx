import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchById } from 'servises/fetchRequaest';
import { useState } from 'react';
import Container from 'components/Container/Container';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FilmDetails = () => {
  const [filmDetail, setFilmDetail] = useState([]);
  const id = useParams();
  const quary = useParams()
  console.log(quary)

  if (filmDetail.length === 0) {
    fetchById(id.id)
      .then(data => {
        if (data) {
          return setFilmDetail(data);
        }
      })
      .catch(() => {
        return toast('Немає даних');
      });
  }

  const genres = filmDetail.genres;

  return (
    <Container>
      <NavLink to="/movies/query/:query" key="GoBack">
        <button style={{ marginBottom: 10 }}>Go back</button>
      </NavLink>
      <div style={{ display: 'flex' }} key={filmDetail.id}>
        {filmDetail.poster_path && (
          <img
            width={250}
            src={`https://image.tmdb.org/t/p/w500/${filmDetail.poster_path}`}
            alt={filmDetail.original_title}
          />
        )}

        <div style={{ marginLeft: 20 }} key="title">
          <h1>{filmDetail.original_title}</h1>
          <p key={1}>
            {' '}
            Popularity: {Math.round(Number(filmDetail.popularity))}%
          </p>
          <h2>Overview</h2>
          <p key={2}>{filmDetail.overview}</p>
          <h2>Genres</h2>
          <div style={{ display: 'flex', marginRight: 20 }} key="genres">
            {genres && genres.map(el => <p>{el.name}</p>)}
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 100,
          justifyContent: 'center',
          border: 2,
        }}
      >
        <NavLink
          to="cast"
          key="cast"
          className={({ isActive }) =>
            isActive ? 'linkDetail activeDetails' : 'linkDetail'
          }
        >
          CAST
        </NavLink>
        <hr />
        <NavLink
          to="reviews"
          key="reviews"
          className={({ isActive }) =>
            isActive ? 'linkDetail activeDetails' : 'linkDetail'
          }
        >
          Reviews
        </NavLink>
        <hr />
      </div>

      <Outlet />
    </Container>
  );
};

export default FilmDetails;
