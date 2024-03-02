import { createBrowserRouter } from 'react-router-dom';
import LayoutPage from '../pages/layout.page';
import ErrorPage from '../pages/error.page';
import { AppRouter } from '../constants/constants';
import LoginPage from '../pages/login.page';
import RegistrationPage from '../pages/registration.page';
import ProductListPage from '../pages/product-list.page';
import { productsLoader } from '../loaders/products.loader';
import ProductPage from '../pages/product.page';
import { productLoader } from '../loaders/product.loader';
import { productsActions } from '../actions/products.actions';

export const router = createBrowserRouter([
  {
    path: AppRouter.Root,
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppRouter.Login,
        element: <LoginPage />,
      },
      {
        path: AppRouter.Register,
        element: <RegistrationPage />,
      },
      {
        path: AppRouter.Products,
        loader: productsLoader,
        action: productsActions,
        element: <ProductListPage />,
      },
      {
        path: `${AppRouter.Products}/:id`,
        loader: productLoader,
        element: <ProductPage />,
      },
    ],
  },
]);
