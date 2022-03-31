import { Film } from './types/film';
import { ALL_GENRES_TITLE } from './constants';

type Genre = {
  id: number;
  name: string;
};

export const getCatalogGenre = (genre:string) => genre;

export const getGenreList = (films: Film[]) => {
  const collectedGenres: string[] = [];

  films.filter((film) => collectedGenres.push(film.genre));

  const uniqueGenres = [ALL_GENRES_TITLE,...new Set(collectedGenres)];
  const catalogGenres: Genre[] = [];

  uniqueGenres.map((genre, index) =>
    catalogGenres.push({id: index, name: getCatalogGenre(genre)},
    ));

  return catalogGenres;
};
