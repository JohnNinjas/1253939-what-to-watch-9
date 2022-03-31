import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeGenre, resetFilmsCount } from '../../store/action';
import { Film } from '../../types/film';
import { getGenreList } from '../../utils';

type GenreListProps = {
  films: Film[];
  activeGenre: string;
}

function GenreList({films, activeGenre}: GenreListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const catalogGenres = getGenreList(films);

  return (
    <ul className="catalog__genres-list">
      {
        catalogGenres.map((catalogGenre) =>(
          <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === activeGenre ? 'catalog__genres-item--active': ''}`}>
            <Link
              to={AppRoutes.Main}
              className="catalog__genres-link"
              onClick={() => {
                dispatch(changeGenre(catalogGenre.name));
                dispatch(resetFilmsCount());
              }}
            >
              {catalogGenre.name}
            </Link>
          </li>),
        )
      }
    </ul>
  );
}

export default GenreList;
