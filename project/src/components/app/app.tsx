import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../404/not-found-page';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import { Film } from '../../types/film';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';

type AppPromoFilmCard = {
  promo: {
    title: string,
    genre: string,
    releaseDate: number
  },
  films: Film[],
};

function App({promo, films}: AppPromoFilmCard): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainScreen promo={promo} films={films} />} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Films}>
          <Route path={AppRoutes.FilmOverview} element={<MoviePage films={films}/>} />
          <Route path={AppRoutes.FilmDetails} element={<MoviePageDetails films={films}/>} />
          <Route path={AppRoutes.FilmReviews} element={<MoviePageReviews films={films}/>} />
          <Route path={AppRoutes.AddReview} element={<AddReview films={films} />} />
        </Route>
        <Route path={AppRoutes.Player} element={<Player films={films} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
