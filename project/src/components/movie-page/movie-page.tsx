import { Link, useNavigate, useParams } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { Film } from '../../types/film';
import NotFoundPage from '../404/not-found-page';
import Tabs from '../tabs/tabs';
import CurrentTab from '../currentTab/currentTab';
import FilmCard from '../film-card/film-card';
import { FIRST_FOUR_FILMS } from '../../constants';

type MoviePageProps = {
  films: Film[],
}

function MoviePage({films}: MoviePageProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const currentFilm: any = films.find((film) => film.id === Number(params.id));
  const activeTab = window.location.hash;
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);
  const moreSimilarFilms = films.filter((elem) => (elem.genre === currentFilm.genre) && (elem.id !== currentFilm.id));
  const fourSimilarFilms = moreSimilarFilms.slice(0, FIRST_FOUR_FILMS);

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  const clickPlayHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(`/player/${currentFilm.id}`);
  };

  return(
    <>
      <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImg} alt={currentFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={clickPlayHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${currentFilm.id}/addreview`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.poster} alt={currentFilm.title} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <Tabs />
              <CurrentTab activeTab={activeTab} films={films} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {fourSimilarFilms.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              isActive={film.id === activeFilmId}
              onHover={setActiveFilmId}
            />
          ))}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
