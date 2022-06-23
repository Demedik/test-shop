import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { removeFromCartAction } from '@store/actions';
import { selectCart } from '@store/seletors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private store: Store) {
    this.store.select(selectCart).subscribe(item => this.cartItems = item);
  }

  calcPrice (item): number {
    return Number(item.variants[0].price) * item.amount;
  }

  getDescriptionOfItem(item): string {
    return item.variants[0].title;
  }

  removeItemFromCart(item): void{
    this.store.dispatch(removeFromCartAction({ productId: item.id }));
  }

  countTotal(): number {
    return this.cartItems.reduce((acc, item) => {
      const itemPrice = this.calcPrice(item);

      return acc + itemPrice;
    },0)
  }
}
