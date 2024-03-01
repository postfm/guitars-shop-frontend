import { Link } from 'react-router-dom';
import { AppRouter } from '../constants/constants';

const LoginPage = (): JSX.Element => (
  <div className="container">
    <section className="login">
      <h1 className="login__title">Войти</h1>
      <p className="login__text">
        Hовый пользователь?{' '}
        <Link
          className="login__link"
          to={`${AppRouter.Root}${AppRouter.Register}`}
        >
          Зарегистрируйтесь
        </Link>{' '}
        прямо сейчас
      </p>
      <form method="post" action="/">
        <div className="input-login">
          <label htmlFor="email">Введите e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
          />
          <p className="input-login__error">Заполните поле</p>
        </div>
        <div className="input-login">
          <label htmlFor="passwordLogin">Введите пароль</label>
          <span>
            <input
              type="password"
              placeholder="• • • • • • • • • • • •"
              id="passwordLogin"
              name="password"
              autoComplete="off"
              required
            />
            <button className="input-login__button-eye" type="button">
              <svg width={14} height={8} aria-hidden="true">
                <use xlinkHref="#icon-eye" />
              </svg>
            </button>
          </span>
          <p className="input-login__error">Заполните поле</p>
        </div>
        <button className="button login__button button--medium" type="submit">
          Войти
        </button>
      </form>
    </section>
  </div>
);

export default LoginPage;
