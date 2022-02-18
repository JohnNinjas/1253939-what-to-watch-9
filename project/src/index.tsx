import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilmParams = {
  genre: 'Drama',
  releaseDate: 2014,
  title: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App title={promoFilmParams.title} genre={promoFilmParams.genre} releaseDate={promoFilmParams.releaseDate} />
  </React.StrictMode>,
  document.getElementById('root'));
