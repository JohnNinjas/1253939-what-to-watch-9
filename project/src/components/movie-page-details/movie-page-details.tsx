import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import NotFoundPage from '../404/not-found-page';

const MINUTES_IN_HOURS = 60;

type MoviePageDetailsProps = {
  films: Film[],
}

function MoviePageDetails({films}: MoviePageDetailsProps): JSX.Element {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  const convertRuntime = (mins: number): string => {
    const hours = Math.trunc(mins/MINUTES_IN_HOURS);
    const minutes = mins % MINUTES_IN_HOURS;
    return `${hours}h ${minutes}m`;
  };

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {currentFilm.starring.join(', ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertRuntime(currentFilm.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm.released}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetails;
