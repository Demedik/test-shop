import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { selectProducts, selectLoading, selectIsMoreToLoad, selectInitialLoadingComplete } from '@store/seletors';
import { getProductsAction, setOffsetAction, getMoreProductsAction } from '@store/actions';

import { IProduct } from '../../../../app.constants';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  products$: Observable<Array<IProduct>> = this.store.select<IProduct[]>(selectProducts);
  isMore$: Observable<boolean> = this.store.select<boolean>(selectIsMoreToLoad);
  initComplete$: Observable<boolean> = this.store.select(selectInitialLoadingComplete);

  constructor(private readonly store: Store ) {
    this.store.dispatch(getProductsAction());
  }
}
