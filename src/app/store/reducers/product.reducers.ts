import { createReducer, on } from '@ngrx/store';


import {
  getProductsErrorAction,
  setOrderByAction,
  getMoreProductsSuccessAction,
  getMoreProductsErrorAction,
  setOffsetAction,
  getProductsAction,
  getProductsSuccessAction,
  getMoreProductsAction
} from '@store/actions';

import { ICategory } from './../store.constants';
import { SelectOptionsEnum } from './../../app.constants';

const initiatialCategoryState: ICategory ={
  orderBy: SelectOptionsEnum.AZ,
  products: [],
  loading: false,
  offset: 0,
  total: 0,
  initComplete: false,
};

const getProductsReducer = (state: ICategory): ICategory => ({...state, loading: true, initComplete: false, offset: 0  });
const setOffsetReducer = (state: ICategory): ICategory => ({...state, offset: state.products.length});
const getProductsSuccessReducer = (state: ICategory, { type, ...action }): ICategory => ({...state, ...action, loading: false, initComplete: true  });
const getProductsErrorReducer = (state: ICategory): ICategory => ({...state, loading: false, initComplete: true });
const setOrderByReducer = (state: ICategory, { type, ...action }): ICategory => ({ ...state, ...action });

const getMoreProductsReducer = (state: ICategory): ICategory => ({...state, loading: true });
const getMoreProductsSuccessReducer = (state: ICategory, { type, ...action }): ICategory => ({...state, ...action, products: [...state['products'], ...action['products']], loading: false  });
const getMoreProductsErrorReducer = (state: ICategory): ICategory => ({...state, loading: false });

export const reducersCategory = createReducer(initiatialCategoryState,
  on(getProductsAction, getProductsReducer),
  on(getProductsSuccessAction, getProductsSuccessReducer),
  on(getProductsErrorAction, getProductsErrorReducer),
  on(setOrderByAction, setOrderByReducer),
  on(setOffsetAction,setOffsetReducer),
  on(getMoreProductsAction, getMoreProductsReducer),
  on(getMoreProductsSuccessAction, getMoreProductsSuccessReducer),
  on(getMoreProductsErrorAction, getMoreProductsErrorReducer)
);
