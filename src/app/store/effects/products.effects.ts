import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of, timer, withLatestFrom } from 'rxjs';

import { getProductsAction, getProductsSuccessAction, getProductsErrorAction, getMoreProductsAction, getMoreProductsErrorAction, getMoreProductsSuccessAction } from '@store/actions';

import { selectCategory } from '@store/seletors';
import { ProductService } from './../../services/product.service';

import { IProduct } from './../../app.constants';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productSevice: ProductService,
    private store: Store
  ) {

  }

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    withLatestFrom(this.store.select(selectCategory)),
    mergeMap(([actionType ,{ orderBy, offset }]) => {
      return this.productSevice.getProducts(orderBy, offset)
      .pipe(
        catchError(() =>of(getProductsErrorAction())),
        map((item: any) => getProductsSuccessAction(item)
      ))
    })
  ));

  loadMoreProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getMoreProductsAction),
    withLatestFrom(this.store.select(selectCategory)),
    mergeMap(([actionType ,{ orderBy, offset }]) => {
      return this.productSevice.getProducts(orderBy, offset)
      .pipe(
        catchError(() =>of(getMoreProductsErrorAction())),
        map((item: any) => getMoreProductsSuccessAction(item)
      ))
    })
  ));
}
