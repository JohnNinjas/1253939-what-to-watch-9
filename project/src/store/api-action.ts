import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './index';
import { store } from './index';
import { Film } from '../types/film';
import { APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus, AppRoutes } from '../constants';
import {
  getFilms,
  getPromoFilm,
  resetUser,
  requireAuthorization,
  redirectToRoute,
  setError,
  setUser
} from './action';
import { errorHandle } from '../services/error-handler';
import { UserData, AuthData } from '../types/user';
import { dropToken, saveToken } from '../services/token';

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
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(setUser(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoutes.Main));
      store.dispatch(setUser(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(resetUser());
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
