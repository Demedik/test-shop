import { createSelector } from '@ngrx/store';

import { IAppState, ICategory} from '@store/store.constants';

import { IProduct } from './../../app.constants';

export const selectCategory = (state:  IAppState): ICategory =>  state.category;
export const selectOrderByOption = createSelector(selectCategory, (state: ICategory) => ({ orderBy: state.orderBy }));
export const selectProducts = createSelector(selectCategory,(state: ICategory): IProduct[] => state.products);
export const selectIsMoreToLoad = createSelector(selectCategory,(state: ICategory): boolean => state.total > state.products.length);
export const selectLoading = createSelector(selectCategory,(state: ICategory): boolean => state.loading);
export const selectInitialLoadingComplete = createSelector(selectCategory,(state: ICategory): boolean => state.initComplete);
