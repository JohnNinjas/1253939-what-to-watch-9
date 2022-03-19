import { TabNames } from '../../constants';
import { Film } from '../../types/film';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';

type currentTabProps = {
    activeTab: string,
    films: Film[],
};

function CurrentTab({activeTab, films}: currentTabProps): JSX.Element {
  const returnActiveTab = (film: Film[], tab: string) => {
    switch (tab) {
      case TabNames.Details:
        return <MoviePageDetails films={film} />;
      case TabNames.Reviews:
        return <MoviePageReviews films={film} />;
      default:
        return <MoviePageOverview films={film} />;
    }
  };

  return (
    <>
      {returnActiveTab(films, activeTab)}
    </>
  );
}

export default CurrentTab;
