import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';
import { Item } from '@models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiBaseUrl = '/api/cart';

  constructor(
    private apiService: ApiService
  ) {}

  /**
   * Get all cart items
   * @returns Observable<Item[]>
   */
  getCartItems(): Observable<Item[]> {
    return this.apiService.get<Item[]>(`${this.apiBaseUrl}/items`);
  }

  /**
   * Add an item to the cart
   * @param item - The item to add
   * @returns Observable<void>
   */
  addItemToCart(item: Item): Observable<void> {
    return this.apiService.post<void>(`${this.apiBaseUrl}/add`, item);
  }

  /**
   * Clear all cart items
   * @returns Observable<void>
   */
  clearCart(): Observable<void> {
    return this.apiService.delete<void>(`${this.apiBaseUrl}/clear`);
  }
}
