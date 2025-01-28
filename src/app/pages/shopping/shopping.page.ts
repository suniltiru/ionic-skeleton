import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '@models/item.model';
import { map, startWith } from 'rxjs/operators';
import { CartService } from '@services/cart.service';
import { StorageService } from '@services/storage.service';


@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: false,
})
export class ShoppingPage {
  cartItems$: Observable<Item[]>;

  constructor(
    private store: Store<{ cart: { items: Item[] } }>, 
    private cartService: CartService,
    private storageService: StorageService
  ) {
    this.cartItems$ = this.store.select(state => state.cart.items).pipe(
      startWith([]) // Ensure the observable starts with an empty array
    );
  }

  async saveUserPreference() {
    await this.storageService.set('userPreference', { theme: 'dark' });
    console.log('User preference saved!');
  }

  async getUserPreference() {
    const preference = await this.storageService.get('userPreference');
    console.log('User preference:', preference);
  }

  async saveToStorage() {
    await this.storageService.set('cart', { items: ['item1', 'item2'] });
    console.log('Cart saved to storage!');
  }

  async loadFromStorage() {
    const cart = await this.storageService.get('cart');
    console.log('Loaded cart:', cart);
  }

  async clearStorage() {
    await this.storageService.clear();
    console.log('Storage cleared!');
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      console.log('Cart cleared successfully');
      this.store.dispatch({ type: '[Cart] Clear Cart' });
    });
  }
}
