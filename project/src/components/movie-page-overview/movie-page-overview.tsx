import { useParams } from 'react-router-dom';
import {Film} from '../../types/film';
import NotFoundPage from '../404/not-found-page';

type MoviePageOverviewProps = {
    films: Film[],
}

function MoviePageOverview({films}: MoviePageOverviewProps): JSX.Element {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));
  const filmStarring = currentFilm?.starring.join(', ');

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {filmStarring} and other</strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;
