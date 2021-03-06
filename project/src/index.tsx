import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmAction, fetchPromoFilmAction } from './store/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchFilmAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
