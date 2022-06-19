import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import Container from 'components/Container/Container';
import NavBar from 'components/NavigationBar/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
// import Home from 'pages/Home';
// import MovieForm from 'pages/MovieForm';
// import  FilmDetails  from 'components/FilmDetails/FilmDetails';
// import  Cast  from 'components/Cast/Cast';
// import  Reviews  from 'components/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const MovieForm = lazy(() => import('pages/MovieForm'));
const FilmDetails = lazy(() => import('components/FilmDetails/FilmDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies/" element={<MovieForm />} />
            <Route path="/movies/:id" element={<FilmDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </Container>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
