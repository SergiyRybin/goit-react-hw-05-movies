import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import Container from 'components/Container/Container';
import NavBar from 'components/NavigationBar/NavBar';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const MovieSearch = lazy(() => import('pages/MovieSearch/MovieSearch'));
const MoviesBar = lazy(() => import('pages/MovieBar/MoviesBar'));
const FilmDetails = lazy(() => import('pages/FilmDetails/FilmDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const App = () => {
  const location = useLocation();

  return (
    <>
      <BrowserRouter basename='/goit-react-hw-05-movies/'>
        <Suspense fallback={<Loader />}>
          <Container>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/movies"
                element={location.search ? <MovieSearch /> : <MoviesBar />}
              />
              <Route path="/movies/:id" element={<FilmDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
          <ToastContainer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
