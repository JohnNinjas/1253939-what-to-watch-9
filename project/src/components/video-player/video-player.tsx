import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {Film} from '../../types/film';

type VideoPlayerProps = {
  autoPlay: boolean,
  film: Film,
}

function VideoPlayer({autoPlay, film}: VideoPlayerProps): JSX.Element {
  const {id, poster, previewVideoLink, title} = film;
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onMouseEnterHandler = () => {
    setTimer(setTimeout(() => {
      if(!isLoading) {
        videoRef.current && videoRef.current.play();
      }
    }, 1000));
  };

  const onMouseLeaveHandler = () => {
    if(timer) {
      clearTimeout(timer);
      setTimer(null);
      videoRef.current && videoRef.current.load();

    }
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        <video
          ref={videoRef}
          src={previewVideoLink}
          poster={poster}
          muted
          autoPlay={autoPlay}
          onLoadedData={() => {
            setIsLoading(false);
          }}
          width="100%"
          height="100%"
        >
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default VideoPlayer;
