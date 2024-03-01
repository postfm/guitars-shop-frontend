import axios from 'axios';
import { ProductLoadInterface } from '../interfaces/products.interface';

export const productsLoader = async (): Promise<ProductLoadInterface> => {
  const { data } = await axios.get<ProductLoadInterface>(
    'http://localhost:4000/guitar/products?sortDirection=desc&sortingType=price'
  );
  return data;
};
