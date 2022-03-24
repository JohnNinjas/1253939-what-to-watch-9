import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store: any = configureStore({reducer});
