import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <VideoPlayer autoPlay={false} film={film} />
  );
}

export default FilmCard;
