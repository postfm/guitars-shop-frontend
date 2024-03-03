import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ProductInterface } from '../interfaces/products.interface';
import { getDate } from '../utils/get-date';
import { AppRouter } from '../constants/constants';
import { ChangeEvent, useRef, useState } from 'react';
import { instance } from '../api/api';
import { AxiosResponse } from 'axios';
import { getImageUrl } from '../utils/get-image-url';

const EditItemPage = (): JSX.Element => {
  const product = useLoaderData() as ProductInterface;
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<string>(product.photo);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('photo', e.target.files[0]);
    formData.append('fileName', e.target.files[0].name);

    instance
      .post('files/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((response: AxiosResponse<string>) => setPhoto(response.data));
  };

  const handleFileDelete = () => {
    instance
      .post(
        'files/delete',
        { filePath: photo },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((response: AxiosResponse<string>) => setPhoto(response.data));
  };

  return (
    <section className="edit-item">
      <div className="container">
        <h1 className="edit-item__title">СURT Z30 Plus</h1>
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="link" to={AppRouter.Root}>
              Вход
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Товары</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">СURT Z30 Plus</a>
          </li>
        </ul>
        <Form
          className="edit-item__form"
          action={AppRouter.Products}
          method="patch"
        >
          <input type="hidden" name="id" value={product.id} />
          <div className="edit-item__form-left">
            <div className="edit-item-image edit-item__form-image">
              <div className="edit-item-image__image-wrap">
                <img
                  className="edit-item-image__image"
                  src={getImageUrl(photo)}
                  srcSet={getImageUrl(photo)}
                  width={133}
                  height={332}
                  alt={product.name}
                />
              </div>
              <input type="hidden" name="photo" value={photo} />
              <div className="edit-item-image__btn-wrap">
                <input
                  type="file"
                  ref={inputRef}
                  accept="image/"
                  onChange={handleFileChange}
                  hidden
                />
                <button
                  className="button button--small button--black-border edit-item-image__btn"
                  type="button"
                  onClick={handleUploadClick}
                >
                  Заменить
                </button>
                <button
                  className="button button--small button--black-border edit-item-image__btn"
                  type="button"
                  onClick={handleFileDelete}
                >
                  Удалить
                </button>
              </div>
            </div>
            <div className="input-radio edit-item__form-radio">
              <span>Тип товара</span>
              <input
                type="radio"
                id="guitar"
                name="item-type"
                defaultValue="guitar"
                defaultChecked={'guitar' === product.type}
              />
              <label htmlFor="guitar">Акустическая гитара</label>
              <input
                type="radio"
                id="el-guitar"
                name="item-type"
                defaultValue="el-guitar"
                defaultChecked={'el-guitar' === product.type}
              />
              <label htmlFor="el-guitar">Электрогитара</label>
              <input
                type="radio"
                id="ukulele"
                name="item-type"
                defaultValue="ukulele"
                defaultChecked={'ukulele' === product.type}
              />
              <label htmlFor="ukulele">Укулеле</label>
            </div>
            <div className="input-radio edit-item__form-radio">
              <span>Количество струн</span>
              <input
                type="radio"
                id="string-qty-4"
                name="string-qty"
                defaultValue={4}
                defaultChecked={4 === product.strings}
              />
              <label htmlFor="string-qty-4">4</label>
              <input
                type="radio"
                id="string-qty-6"
                name="string-qty"
                defaultValue={6}
                defaultChecked={6 === product.strings}
              />
              <label htmlFor="string-qty-6">6</label>
              <input
                type="radio"
                id="string-qty-7"
                name="string-qty"
                defaultValue={7}
                defaultChecked={7 === product.strings}
              />
              <label htmlFor="string-qty-7">7</label>
              <input
                type="radio"
                id="string-qty-12"
                name="string-qty"
                defaultValue={12}
                defaultChecked={12 === product.strings}
              />
              <label htmlFor="string-qty-12">12</label>
            </div>
          </div>
          <div className="edit-item__form-right">
            <div className="custom-input edit-item__form-input">
              <label>
                <span>Дата добавления товара</span>
                <input
                  type="text"
                  name="date"
                  defaultValue={getDate(product.createdAt)}
                  placeholder="Дата в формате 00.00.0000"
                  readOnly
                />
              </label>
              <p>Заполните поле</p>
            </div>
            <div className="custom-input edit-item__form-input">
              <label>
                <span>Наименование товара</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={product.name}
                  placeholder="Наименование"
                />
              </label>
              <p>Заполните поле</p>
            </div>
            <div className="custom-input edit-item__form-input edit-item__form-input--price">
              <label>
                <span>Цена товара</span>
                <input
                  type="text"
                  name="price"
                  defaultValue={`${product.price}`}
                  placeholder="Цена в формате 00 000"
                />
              </label>
              <p>Заполните поле</p>
            </div>
            <div className="custom-input edit-item__form-input">
              <label>
                <span>Артикул товара</span>
                <input
                  type="text"
                  name="article"
                  defaultValue={product.article}
                  placeholder="Артикул товара"
                />
              </label>
              <p>Заполните поле</p>
            </div>
            <div className="custom-textarea edit-item__form-textarea">
              <label>
                <span>Описание товара</span>
                <textarea
                  name="description"
                  placeholder=""
                  defaultValue={product.description}
                />
              </label>
              <p>Заполните поле</p>
            </div>
          </div>
          <div className="edit-item__form-buttons-wrap">
            <button
              className="button button--small edit-item__form-button"
              type="submit"
            >
              Сохранить изменения
            </button>
            <button
              className="button button--small edit-item__form-button"
              type="button"
              onClick={() => navigate(AppRouter.Products)}
            >
              Вернуться к списку товаров
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default EditItemPage;
