import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItemToCart, removeItemFromCart } from '@store/cart/cart.actions';
import { Observable } from 'rxjs';
import { Item } from '@models/item.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  @Input() items: Item[] = [];
  cartItems$: Observable<Item[]>;

  constructor(private store: Store<{ cart: { items: Item[] } }>) {
    this.cartItems$ = this.store.select(state => state.cart.items);
  }

  addItem(item: Item) {
    this.store.dispatch(addItemToCart({ item }));
  }

  removeItem(itemId: string) {
    this.store.dispatch(removeItemFromCart({ itemId }));
  }
}
