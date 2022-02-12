import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilmParams = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App title={promoFilmParams.title} genre={promoFilmParams.genre} releaseDate={promoFilmParams.releaseDate} />
  </React.StrictMode>,
  document.getElementById('root'));
