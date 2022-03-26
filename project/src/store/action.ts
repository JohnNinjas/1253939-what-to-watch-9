import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('genres/genreChange');

export const getFilmsOfGenre = createAction('filmList/getFilmsOfGenre');

export const incrementFilmsCount = createAction('main/incFilmsCount');

export const resetFilmsCount = createAction('main/resetFilmsCount');
