import { createReducer, on } from '@ngrx/store';

import { removeFromCartAction, addToCartAction } from '@store/actions';

import { ICart } from '@store/store.constants';


const initiatialCartState: ICart ={
  cart: [],
};

const addToCartReducer = (state: ICart, { type, ...action }): ICart => {
  const cart = [...state.cart];
  const existOrder = cart.find(({ id }) => id === action['productId']);

  if(existOrder) {
    const newItem = {id: existOrder.id, amount: existOrder.amount + 1};
    cart.splice(cart.indexOf(existOrder), 1, newItem);
  } else {
    cart.push({id: action['productId'], amount: 1});
  }
  return ({...state, cart })
};

const removeFromCartReducer = (state: ICart, { type, ...action }): ICart => {
  const cart = [...state.cart];
  const existOrder = state.cart.find(({ id }) => id === action['productId']);
  const newItem = {id: existOrder.id, amount: existOrder.amount - 1};

  cart.splice(cart.indexOf(existOrder), 1, newItem);
  return ({...state, cart: [ ...cart.filter(({amount}) => (amount > 0)) ] })
};



export const reducersCart = createReducer(initiatialCartState,
  on(addToCartAction, addToCartReducer),
  on(removeFromCartAction, removeFromCartReducer),
);
