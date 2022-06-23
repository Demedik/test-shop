import { createAction, props } from '@ngrx/store';

export enum CartActions {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
  SEND_ORDER = 'SEND_ORDER',
  SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS',
  SEND_ORDER_ERROR = 'SEND_ORDER_ERROR',
}


export interface addToCartActionPayload { productId: number};

export const addToCartAction = createAction(CartActions.ADD_TO_CART, props<addToCartActionPayload>());

export interface removeFromCartActionPayload { productId: number};

export const removeFromCartAction = createAction(CartActions.REMOVE_FROM_CART, props<removeFromCartActionPayload>());

export const clearCartAction = createAction(CartActions.CLEAR_CART);
