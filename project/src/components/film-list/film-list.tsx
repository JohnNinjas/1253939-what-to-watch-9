import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import { getCatalogGenre } from '../../utils';

type FilmsListProps = {
  films: Film[],
  activeGenre: string;
};

function FilmsList({films, activeGenre}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const filmsOfGenre: Film[] = [];
  films.forEach((film) => {
    if (film.genre === getCatalogGenre(activeGenre)) {
      filmsOfGenre.push(film);
    }
  });

  const filmin = activeGenre === 'All genres'? films : filmsOfGenre;

  return (
    <div className="catalog__films-list">
      {filmin.map((film) => (
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
