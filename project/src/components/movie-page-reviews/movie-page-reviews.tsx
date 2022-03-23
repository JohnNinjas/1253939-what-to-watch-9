import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import NotFoundPage from '../404/not-found-page';
import { ReviewType } from '../../types/reviewType';

type MoviePageReviewsProps = {
  films: Film[],
  reviews: ReviewType[],
}

function MoviePageReviews({films, reviews}: MoviePageReviewsProps): JSX.Element {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((elem) => (
          <div className="review" key={elem.id}>
            <blockquote className="review__quote">
              <p className="review__text">{elem.text}</p>

              <footer className="review__details">
                <cite className="review__author">{elem.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{elem.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{elem.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
