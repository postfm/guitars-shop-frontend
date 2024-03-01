import { Link } from 'react-router-dom';
import { AppRouter } from '../constants/constants';

const ErrorPage = (): JSX.Element => (
  <div className="container">
    <section className="error">
      <h1 className="error__title">404</h1>
      <span className="error__subtitle">Страница не найдена.</span>
      <p className="error__text">
        {' '}
        Возможно, страница была удалена или
        <br />
        её вовсе не существовало.
      </p>
      <Link
        type="button"
        className="button button__error button--small button--black-border"
        to={AppRouter.Root}
      >
        На главную
      </Link>
    </section>
  </div>
);

export default ErrorPage;
