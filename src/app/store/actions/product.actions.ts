import { createAction, props } from '@ngrx/store';

import { SelectOptionsEnum } from './../../app.constants';

export enum ProductActions {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS',
  GET_MORE_PRODUCTS_SUCCESS = 'GET_MORE_PRODUCTS_SUCCESS',
  GET_MORE_PRODUCTS_ERROR = 'GET_MORE_PRODUCTS_ERROR',
  SET_ORDER_BY = 'SET_ORDER_BY',
  SET_OFFSET = 'SET_OFFSET',
}

export const getProductsAction = createAction(ProductActions.GET_PRODUCTS);
export const getMoreProductsAction = createAction(ProductActions.GET_MORE_PRODUCTS);

export interface getProductsSuccessActionPayload { products: any[]};

export const getProductsSuccessAction = createAction(ProductActions.GET_PRODUCTS_SUCCESS, props<getProductsSuccessActionPayload>());
export const getProductsErrorAction = createAction(ProductActions.GET_PRODUCTS_ERROR);

export interface getMoreProductsSuccessActionPayload { products: any[]};

export const getMoreProductsSuccessAction = createAction(ProductActions.GET_MORE_PRODUCTS_SUCCESS, props<getMoreProductsSuccessActionPayload>());
export const getMoreProductsErrorAction = createAction(ProductActions.GET_MORE_PRODUCTS_ERROR);

export const setOffsetAction = createAction(ProductActions.SET_OFFSET);

export interface setOrderByActionPayload { orderBy: SelectOptionsEnum};

export const setOrderByAction = createAction(ProductActions.SET_ORDER_BY, props<setOrderByActionPayload>());
