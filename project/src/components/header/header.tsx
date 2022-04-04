import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { resetFilmsGenre } from '../../store/action';

type HeaderProps = {
  title?: string,
  isTypeUserPage?: boolean,
}

export default function Header({title, isTypeUserPage}: HeaderProps): JSX.Element {
  const userHeadType: string = isTypeUserPage ? 'user-page__head' : 'film-card__head';
  const navigate = useNavigate();
  const { requireAuthorization, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <header className={`page-header ${userHeadType}`}>
      <div className="logo">
        <Link className="logo__link" to={AppRoutes.Main} onClick={() => dispatch(resetFilmsGenre())}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title &&
        (<h1 className="page-title user-page__title">{title}</h1>)}

      {requireAuthorization === AuthorizationStatus.Auth
        ?
        (
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar" onClick={() => navigate('/mylist')}>
                <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link
                className="user-block__link"
                to="/"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
            Sign out
              </Link>
            </li>
          </ul>
        )
        :
        (
          <div className="user-block">
            <Link to={AppRoutes.SignIn} className="user-block__link">Sign in</Link>
          </div>
        )}
    </header>
  );
}
