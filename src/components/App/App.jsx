import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import s from '../App/App.module.css';
// import fetchDataImage from 'servises/fetchRequaest';
import Container from 'components/Container/Container';
import NavBar from 'components/NavigationBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import MovieForm from 'components/MovieForm';

const App = () => {
  return (
    <div className={s.App}>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/movies" element={<MovieForm />}></Route>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
