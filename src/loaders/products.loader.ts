import { ProductLoadInterface } from '../interfaces/products.interface';
import { instance } from '../api/api';
import { LoaderFunction } from 'react-router';

export const productsLoader: LoaderFunction =
  async (): Promise<ProductLoadInterface> => {
    const { data } = await instance.get<ProductLoadInterface>(
      'products?sortDirection=desc&sortingType=price'
    );
    return data;
  };
