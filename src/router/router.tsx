import { createBrowserRouter } from 'react-router-dom';
import LayoutPage from '../pages/layout.page';
import ErrorPage from '../pages/error.page';
import { AppRouter } from '../constants/constants';
import LoginPage from '../pages/login.page';
import RegistrationPage from '../pages/registration.page';
import ProductListPage from '../pages/product-list.page';
import { productsLoader } from '../loaders/products.loader';

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
        element: <ProductListPage />,
      },
    ],
  },
]);
