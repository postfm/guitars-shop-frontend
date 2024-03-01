import { Link } from 'react-router-dom';
import { AppRouter } from '../constants/constants';

const Header = (): JSX.Element => (
  <header className="header" id="header">
    <div className="container">
      <div className="header__wrapper">
        <Link className="header__logo logo" to={AppRouter.Root}>
          <img
            className="logo__img"
            width={70}
            height={70}
            src="./img/svg/logo.svg"
            alt="Логотип"
          />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link main-nav__link" to={AppRouter.Products}>
                Каталог
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link main-nav__link" to={AppRouter.Where}>
                Где купить?
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link main-nav__link" to={AppRouter.About}>
                О компании
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__container">
          <span className="header__user-name">Имя</span>
          <Link
            className="header__link"
            to={AppRouter.Login}
            aria-label="Перейти в личный кабинет"
          >
            <svg
              className="header__link-icon"
              width={12}
              height={14}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-account" />
            </svg>
            <span className="header__link-text">Вход</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
