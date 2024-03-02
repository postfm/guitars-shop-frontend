import { ActionFunction, redirect } from 'react-router-dom';
import { instance } from '../api/api';
import { AppRouter } from '../constants/constants';

export const productsActions: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case 'DELETE': {
      const formData = await request.formData();
      const productId = formData.get('id') as string;

      await instance.delete(`${AppRouter.Products}/${productId}`);
      return null;
    }
  }
};
