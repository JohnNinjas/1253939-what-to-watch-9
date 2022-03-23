import { Link } from 'react-router-dom';
import { TabNames } from '../../constants';

function Tabs() {
  const currentTab = window.location.hash;
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === TabNames.Overview ? 'film-nav__item--active' : ''}`}>
          <Link to={TabNames.Overview} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${currentTab === TabNames.Details ? 'film-nav__item--active' : ''}`}>
          <Link to={TabNames.Details} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${currentTab === TabNames.Reviews ? 'film-nav__item--active' : ''}`}>
          <Link to={TabNames.Reviews} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
