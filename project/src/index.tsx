import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

const promoFilmParams = {
  genre: 'Drama',
  releaseDate: 2014,
  title: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App promo={promoFilmParams} films={films} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
