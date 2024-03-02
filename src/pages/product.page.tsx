import { Link, useLoaderData } from 'react-router-dom';
import { ProductInterface } from '../interfaces/products.interface';
import { AppRouter, TypeOfGuitar } from '../constants/constants';
import { useState } from 'react';
import classNames from 'classnames';

const ProductPage = (): JSX.Element => {
  const product = useLoaderData() as ProductInterface;
  const [isDescription, setIsDescription] = useState<boolean>(false);

  const handleChangeDescription = () => {
    setIsDescription(!isDescription);
  };
  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">Товар</h1>
      <ul className="breadcrumbs page-content__breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRouter.Root}>
            Главная
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRouter.Products}>
            Каталог
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="link">Товар</a>
        </li>
      </ul>
      <div className="product-container">
        <img
          className="product-container__img"
          src={product.photo}
          srcSet={product.photo}
          width={90}
          height={235}
          alt="Картинка гитары"
        />
        <div className="product-container__info-wrapper">
          <h2 className="product-container__title title title--big title--uppercase">
            {product.name}
          </h2>
          <br />
          <br />
          <div className="tabs">
            <a
              type="button"
              className={classNames('button button--medium tabs__button', {
                'button--black-border': isDescription,
              })}
              onClick={handleChangeDescription}
            >
              Характеристики
            </a>
            <a
              type="button"
              className={classNames('button button--medium tabs__button', {
                'button--black-border': !isDescription,
              })}
              onClick={handleChangeDescription}
            >
              Описание
            </a>
            <div className="tabs__content" id="characteristics">
              <table
                className={classNames('tabs__table', {
                  hidden: isDescription,
                })}
              >
                <tbody>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Артикул:</td>
                    <td className="tabs__value">{product.article}</td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Тип:</td>
                    <td className="tabs__value">
                      {TypeOfGuitar[product.type]}
                    </td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Количество струн:</td>
                    <td className="tabs__value">{product.strings} струнная</td>
                  </tr>
                </tbody>
              </table>
              <p
                className={classNames('tabs__product-description', {
                  hidden: !isDescription,
                })}
              >
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
