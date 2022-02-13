import MainScreen from '../main-screen/main-screen';

type AppPromoFilmCard = {
  title: string,
  genre: string,
  releaseDate: number
};

function App({title, genre, releaseDate}: AppPromoFilmCard): JSX.Element {
  return <MainScreen title={title} genre={genre} releaseDate={releaseDate}/>;
}

export default App;
