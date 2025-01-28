import { createReducer, on } from '@ngrx/store';
import { addItemToCart, removeItemFromCart, clearCart } from './cart.actions';
import { Item } from '@models/item.model';

export interface CartState {
  items: Item[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(removeItemFromCart, (state, { itemId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== itemId)
  })),
  on(clearCart, state => ({ ...state, items: [] }))
);
