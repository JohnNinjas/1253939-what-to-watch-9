import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import { getCatalogGenre } from '../../utils';

type FilmsListProps = {
  films: Film[],
  activeGenre: string,
  currentFilmId?: number
};

function FilmsList({films, activeGenre, currentFilmId}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const filmsOfGenre: Film[] = [];
  films.forEach((film) => {
    if (film.genre === getCatalogGenre(activeGenre) && currentFilmId !== film.id) {
      filmsOfGenre.push(film);
    }
  });

  const filmsByGenre = activeGenre === 'All genres'? films : filmsOfGenre;

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
