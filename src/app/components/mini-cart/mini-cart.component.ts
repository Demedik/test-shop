import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCartPrice, selectCartLength } from '@store/seletors';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent {
  price$ = this.store.select(selectCartPrice);
  amountOfProducts$ = this.store.select(selectCartLength);

  constructor(private store: Store) { }

}
