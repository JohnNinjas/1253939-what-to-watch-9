import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>404 not found</h1>
      <h2>Страница не найдена</h2>
      <Link to='/'>
        <span>Вернуться на главную</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
