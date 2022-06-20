import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import Container from 'components/Container/Container';
import NavBar from 'components/NavigationBar/NavBar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import MovieSearch from 'components/MovieSearch/MovieSearch';
import MoviesBar from 'components/MovieBar/MoviesBar';

const Home = lazy(() => import('pages/Home'));
const FilmDetails = lazy(() => import('pages/FilmDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const App = () => {
  const location = useLocation();
 
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={location.search ? <MovieSearch/> : <MoviesBar />}>
              {/* <Route index element={<MovieSearch/>} /> */}
            </Route>

            <Route path="/movies/:id" element={<FilmDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
