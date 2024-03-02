import { ProductInterface } from '../interfaces/products.interface';
import { instance } from '../api/api';
import type { LoaderFunction } from 'react-router';

export const productLoader: LoaderFunction = async ({
  params,
}): Promise<ProductInterface> => {
  const { data } = await instance.get<ProductInterface>(
    `products/${params.id}`
  );
  return data;
};
