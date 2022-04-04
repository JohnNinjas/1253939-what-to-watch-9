import { Film, Films } from './film';

export type InitialState = {
  activeGenre: string,
  films: Films,
  filmsCount: number,
  isDataLoaded: boolean,
  promo: Film | null,
  error: string,
}
