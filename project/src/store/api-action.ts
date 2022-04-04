import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './index';
import { store } from './index';
import { Film } from '../types/film';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../constants';
import { getFilms, getPromoFilm } from './action';
import { setError } from './action';
import {errorHandle} from '../services/error-handler';

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data}= await api.get<Film[]>(APIRoute.Films);
      store.dispatch(getFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(getPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
