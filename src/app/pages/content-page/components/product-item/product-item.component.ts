import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

import { addToCartAction } from '@store/actions';

import { IProduct } from '../../../../app.constants';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: IProduct;

  constructor (private store: Store) {

  }

  addToCart() {
    this.store.dispatch(addToCartAction({ productId: this.product.id }));
  }
}
