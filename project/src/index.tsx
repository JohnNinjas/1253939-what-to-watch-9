import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const promoFilmParams = {
  genre: 'Drama',
  releaseDate: 2014,
  title: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App promo={promoFilmParams} films={films} />
  </React.StrictMode>,
  document.getElementById('root'));
