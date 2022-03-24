import { Film } from './types/film';

type Genre = {
  id: number;
  name: string;
};

export const getCatalogGenre = (genre:string) => genre;

export const getGenreList = (films: Film[]) => {
  const collectedGenres: string[] = [];

  films.forEach((film) => collectedGenres.push(film.genre));

  const uniqueGenres = ['All genres',...new Set(collectedGenres)];
  const catalogGenres: Genre[] = [];

  uniqueGenres.map((genre, index) =>
    catalogGenres.push({id: index, name: getCatalogGenre(genre)},
    ));

  return catalogGenres;
};
