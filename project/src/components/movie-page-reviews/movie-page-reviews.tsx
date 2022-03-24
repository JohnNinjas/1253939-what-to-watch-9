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

  const formatCommentDate = (date: string): string => {
    const newDateFormat = new Date(date).toLocaleDateString();
    return String(newDateFormat).replaceAll('.', '-');
  };

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime={formatCommentDate(review.date)}>{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
