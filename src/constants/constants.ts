export const AppRouter = {
  Root: '/',
  Login: '/login',
  Register: '/register',
  Products: '/products',
  Product: '/product',
  Where: '/where',
  Refund: '/refund',
  About: '/about',
  Blog: '/blog',
  FAQ: '/faq',
  Service: '/service',
} as const;

type GuitarType = {
  [key: string]: string;
};

export const TypeOfGuitar: GuitarType = {
  guitar: 'Акустическая гитара',
  ['el-guitar']: 'Электрогитара',
  ukulele: 'Укулеле',
};
