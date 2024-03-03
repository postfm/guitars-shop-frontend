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
    case 'PATCH': {
      const formData = await request.formData();
      const productId = formData.get('id') as string;
      const newProduct = {
        id: productId,
        name: formData.get('name'),
        description: formData.get('description'),
        photo: formData.get('photo'),
        type: formData.get('item-type'),
        article: formData.get('article'),
        strings: Number(formData.get('string-qty')),
        price: Number(formData.get('price')),
      };

      await instance.patch(`${AppRouter.Products}/${productId}`, newProduct);
      return redirect(AppRouter.Products);
    }
  }
};
