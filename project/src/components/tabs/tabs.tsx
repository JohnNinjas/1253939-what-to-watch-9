import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AppRoutes, TabNames } from '../../constants';

function Tabs() {
  const { id } = useParams();
  const { pathname } = useLocation();
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={pathname.includes(TabNames.Overview) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link
            to={`${AppRoutes.Films}/${id}${TabNames.Overview}`}
            className="film-nav__link"
          >
            Overview
          </Link>
        </li>
        <li className={pathname.includes(TabNames.Details) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link
            to={`${AppRoutes.Films}/${id}${TabNames.Details}`}
            className="film-nav__link"
          >
            Details
          </Link>
        </li>
        <li className={pathname.includes(TabNames.Reviews) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link
            to={`${AppRoutes.Films}/${id}${TabNames.Reviews}`}
            className="film-nav__link"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
