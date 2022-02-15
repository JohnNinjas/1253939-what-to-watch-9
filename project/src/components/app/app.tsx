import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../404/not-found-page';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import Player from '../player/player';

type AppPromoFilmCard = {
  title: string,
  genre: string,
  releaseDate: number
};

function App({title, genre, releaseDate}: AppPromoFilmCard): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainScreen title={title} genre={genre} releaseDate={releaseDate} />} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Film} element={<MoviePage />} />
        <Route path={AppRoutes.AddReview} element={<MoviePageReviews />} />
        <Route path={AppRoutes.Player} element={<Player />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
