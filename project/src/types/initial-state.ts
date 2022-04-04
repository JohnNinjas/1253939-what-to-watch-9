import { Film, Films } from './film';
import { AuthorizationStatus } from '../constants';
import { UserData } from './user';

export type InitialState = {
  activeGenre: string,
  films: Films,
  filmsCount: number,
  isDataLoaded: boolean,
  promo: Film | null,
  error: string,
  requireAuthorization: AuthorizationStatus,
  user: UserData | null,
}
