import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {Link} from 'react-router-dom';
import {ONE_SECOND_IN_MILLISECONDS} from '../../constants';
import { TabNames } from '../../constants';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
};

function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {
  const {id, name, previewVideoLink, previewImage} = film;
  let playTimer: NodeJS.Timeout;

  const onMouseEnterHandler = () => {
    playTimer = setTimeout(() => {
      onHover(id);
    }, ONE_SECOND_IN_MILLISECONDS);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(playTimer);
    onHover(0);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        <VideoPlayer
          src={previewVideoLink}
          poster={previewImage}
          isActive={isActive}
          isPreview
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}${TabNames.Overview}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
