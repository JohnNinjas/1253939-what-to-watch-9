import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/film';
import {  AuthorizationStatus, AppRoutes } from '../constants';
import { UserData } from '../types/user';

export const getFilms = createAction<Films>('data/getFilms');

export const getPromoFilm = createAction<Film>('data/getPromoFilm');

export const changeGenre = createAction<string>('genres/genreChange');

export const resetFilmsGenre = createAction('genres/resetFilmsGenre');

export const incrementFilmsCount = createAction('main/incFilmsCount');

export const resetFilmsCount = createAction('main/resetFilmsCount');

export const setError = createAction<string>('data/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');

export const setUser = createAction<UserData>('user/setUser');

export const resetUser = createAction('user/resetUser');
