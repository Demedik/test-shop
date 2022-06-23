import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { setOffsetAction, getMoreProductsAction } from '@store/actions';
import { selectLoading } from '@store/seletors';

@Component({
  selector: 'app-product-load-more',
  templateUrl: './product-load-more.component.html',
  styleUrls: ['./product-load-more.component.scss']
})
export class ProductLoadMoreComponent {
  loading$: Observable<boolean> = this.store.select<boolean>(selectLoading);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }


  getMore() {
    this.store.dispatch(setOffsetAction());
    this.store.dispatch(getMoreProductsAction());
  }
}
