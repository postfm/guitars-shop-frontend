export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  photo: string;
  type: string;
  article: string;
  strings: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductLoadInterface {
  entities: ProductInterface[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
}
