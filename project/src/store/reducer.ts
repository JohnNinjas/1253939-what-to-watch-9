import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilmsOfGenre,
  incrementFilmsCount,
  resetFilmsCount, resetFilmsGenre
} from './action';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { FILMS_COUNT, ALL_GENRES_TITLE } from '../constants';


const initialState: State = {
  activeGenre: ALL_GENRES_TITLE,
  films: [],
  filmsCount: FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsOfGenre, (state) => {
      state.films = films;
    })
    .addCase(resetFilmsGenre, (state) => {
      state.activeGenre = ALL_GENRES_TITLE;
    })
    .addCase(incrementFilmsCount, (state) => {
      state.filmsCount +=FILMS_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    });
});

export {reducer};
