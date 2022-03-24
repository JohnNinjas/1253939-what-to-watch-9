import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsOfGenre } from './action';
import { films } from '../mocks/films';
import { State } from '../types/state';


const initialState: State = {
  activeGenre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsOfGenre, (state) => {
      state.films = films;
    });
});

export {reducer};
