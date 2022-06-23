import { SelectOptionsEnum, IProduct } from './../app.constants';

export interface ICartItem {
  id: number;
  amount: number;
}

export interface ICart {
  cart: ICartItem[];
}

export interface ICategory {
  orderBy: SelectOptionsEnum,
  products: IProduct[];
  loading: boolean;
  offset: number;
  total: number;
  initComplete: boolean;
}


export interface IAppState {
  category: ICategory;
  order: ICart;
}
