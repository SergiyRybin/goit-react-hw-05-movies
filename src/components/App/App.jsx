import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import s from '../App/App.module.css';
import fetchDataImage from 'servises/fetchRequaest';


const App = () => {
  return <div className={s.App}>
    {fetchDataImage()}
  </div>;
};

export default App;
