import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import { getCatalogGenre } from '../../utils';
import { ALL_GENRES_TITLE } from '../../constants';

type FilmsListProps = {
  films: Film[],
  activeGenre: string,
  currentFilmId?: number,
};

function FilmsList({films, activeGenre, currentFilmId}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const filmsOfGenre = films.filter((film) =>
    film.genre === getCatalogGenre(activeGenre)
    &&
    currentFilmId !== film.id,
  );

  const filmsByGenre = activeGenre === ALL_GENRES_TITLE ? films : filmsOfGenre;

  return (
    <div className="catalog__films-list">
      {filmsByGenre.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isActive={film.id === activeFilmId}
          onHover={setActiveFilmId}
        />
      ))}
    </div>
  );
}

export default FilmsList;
