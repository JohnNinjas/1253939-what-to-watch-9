import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../404/not-found-page';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Spinner from '../spinner/spinner';


function App(): JSX.Element {
  const { films, promo, isDataLoaded } = useAppSelector((state) => state);

  if (!isDataLoaded || promo === null) {
    return (<Spinner />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainScreen promo={promo} films={films} />} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute>
            <MyList films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Film} element={<MoviePage films={films}/>} />
        <Route path={AppRoutes.AddReview} element={<AddReview films={films} />} />
        <Route path={AppRoutes.Player} element={<Player films={films} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
