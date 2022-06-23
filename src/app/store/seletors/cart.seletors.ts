import { createSelector } from '@ngrx/store';

import { IAppState, ICartItem } from '@store/store.constants';

import { IProduct } from './../../app.constants';

export const selectCart = (state:  IAppState): (IProduct & ICartItem)[] => {
  return state.order.cart.map(cartItem => {
    const item = state.category.products.find(({id}) => id === cartItem.id )

    return { ...cartItem, ...item };
  })
};

export const selectCartPrice = createSelector(selectCart, (state: (IProduct & ICartItem)[]): number => state.reduce((acc, item) => {
  const itemPrice = Number(item.variants[0].price) * item.amount;

  return acc + itemPrice;
},0));

export const selectCartLength = createSelector(selectCart, (state: ICartItem[]): number => state.length);
