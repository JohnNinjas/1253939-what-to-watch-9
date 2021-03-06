import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  incrementFilmsCount,
  resetFilmsCount,
  resetFilmsGenre,
  getFilms,
  getPromoFilm,
  setError
} from './action';
import { FILMS_COUNT, ALL_GENRES_TITLE } from '../constants';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  activeGenre: ALL_GENRES_TITLE,
  films: [],
  filmsCount: FILMS_COUNT,
  isDataLoaded: false,
  promo: null,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(resetFilmsGenre, (state) => {
      state.activeGenre = ALL_GENRES_TITLE;
    })
    .addCase(incrementFilmsCount, (state) => {
      state.filmsCount +=FILMS_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
