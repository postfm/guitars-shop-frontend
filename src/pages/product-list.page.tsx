import { Form, Link, useLoaderData } from 'react-router-dom';
import { ProductLoadInterface } from '../interfaces/products.interface';
import { getDate } from '../utils/get-date';
import { AppRouter, TypeOfGuitar } from '../constants/constants';

const ProductListPage = (): JSX.Element => {
  const data = useLoaderData() as ProductLoadInterface;
  const products = [...data.entities];

  return (
    <section className="product-list">
      <div className="container">
        <h1 className="product-list__title">Список товаров</h1>
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a className="link" href="./main.html">
              Вход
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Товары</a>
          </li>
        </ul>
        <div className="catalog">
          <form className="catalog-filter" action="#" method="post">
            <h2 className="title title--bigger catalog-filter__title">
              Фильтр
            </h2>
            <fieldset className="catalog-filter__block">
              <legend className="catalog-filter__block-title">Тип гитар</legend>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="acoustic"
                  name="acoustic"
                />
                <label htmlFor="acoustic">Акустические гитары</label>
              </div>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="electric"
                  name="electric"
                  defaultChecked
                />
                <label htmlFor="electric">Электрогитары</label>
              </div>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="ukulele"
                  name="ukulele"
                  defaultChecked
                />
                <label htmlFor="ukulele">Укулеле</label>
              </div>
            </fieldset>
            <fieldset className="catalog-filter__block">
              <legend className="catalog-filter__block-title">
                Количество струн
              </legend>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="4-strings"
                  name="4-strings"
                  defaultChecked
                />
                <label htmlFor="4-strings">4</label>
              </div>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="6-strings"
                  name="6-strings"
                  defaultChecked
                />
                <label htmlFor="6-strings">6</label>
              </div>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="7-strings"
                  name="7-strings"
                />
                <label htmlFor="7-strings">7</label>
              </div>
              <div className="form-checkbox catalog-filter__block-item">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="12-strings"
                  name="12-strings"
                  disabled
                />
                <label htmlFor="12-strings">12</label>
              </div>
            </fieldset>
            <button
              className="catalog-filter__reset-btn button button--black-border button--medium"
              type="reset"
            >
              Очистить
            </button>
          </form>
          <div className="catalog-sort">
            <h2 className="catalog-sort__title">Сортировать:</h2>
            <div className="catalog-sort__type">
              <button
                className="catalog-sort__type-button catalog-sort__type-button--active"
                aria-label="по цене"
              >
                по дате
              </button>
              <button
                className="catalog-sort__type-button"
                aria-label="по цене"
              >
                по цене
              </button>
            </div>
            <div className="catalog-sort__order">
              <button
                className="catalog-sort__order-button catalog-sort__order-button--up"
                aria-label="По возрастанию"
              />
              <button
                className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active"
                aria-label="По убыванию"
              />
            </div>
          </div>
          <div className="catalog-cards">
            <ul className="catalog-cards__list">
              {products.map((product) => (
                <li className="catalog-item" key={product.id}>
                  <div className="catalog-item__data">
                    <img
                      src={product.photo}
                      srcSet={product.photo}
                      width={36}
                      height={93}
                      alt="Картинка гитары"
                    />
                    <div className="catalog-item__data-wrapper">
                      <Link className="link" to={`/products/${product.id}`}>
                        <p className="catalog-item__data-title">
                          {`${TypeOfGuitar[product.type]} ${product.name}`}
                        </p>
                      </Link>
                      <br />
                      <p className="catalog-item__data-date">
                        Дата добавления {getDate(product.createdAt)}
                      </p>
                      <p className="catalog-item__data-price">
                        {product.price} ₽
                      </p>
                    </div>
                  </div>
                  <div className="catalog-item__buttons">
                    <Link
                      className="button button--small button--black-border"
                      to={`${AppRouter.EditItem}/${product.id}`}
                      aria-label="Редактировать товар"
                    >
                      Редактировать
                    </Link>
                    <Form method="delete" action={AppRouter.Products}>
                      <input type="hidden" name="id" value={product.id} />
                      <button
                        className="button button--small button--black-border"
                        type="submit"
                        aria-label="Удалить товар"
                      >
                        Удалить
                      </button>
                    </Form>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="button product-list__button button--red button--big">
          Добавить новый товар
        </button>
        <div className="pagination product-list__pagination">
          <ul className="pagination__list">
            <li className="pagination__page pagination__page--active">
              <a className="link pagination__page-link" href={'1'}>
                1
              </a>
            </li>
            <li className="pagination__page">
              <a className="link pagination__page-link" href={'2'}>
                2
              </a>
            </li>
            <li className="pagination__page">
              <a className="link pagination__page-link" href={'3'}>
                3
              </a>
            </li>
            <li className="pagination__page pagination__page--next" id="next">
              <a className="link pagination__page-link" href={'2'}>
                Далее
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;
