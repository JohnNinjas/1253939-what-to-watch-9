import { Film } from '../../types/film';
import { Link } from 'react-router-dom';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
};

function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(film.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="small-film-card__image">
        <img src={film.previewImg} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
