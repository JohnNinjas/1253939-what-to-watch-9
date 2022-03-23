import { TabNames } from '../../constants';
import { Film } from '../../types/film';
import { reviews } from '../../mocks/reviews';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';

type currentTabProps = {
    activeTab: string,
    films: Film[],
};

function CurrentTab({activeTab, films}: currentTabProps): JSX.Element {
  switch (activeTab) {
    case TabNames.Details:
      return <MoviePageDetails films={films} />;
    case TabNames.Reviews:
      return <MoviePageReviews films={films} reviews={reviews}/>;
    default:
      return <MoviePageOverview films={films} />;
  }
}

export default CurrentTab;
