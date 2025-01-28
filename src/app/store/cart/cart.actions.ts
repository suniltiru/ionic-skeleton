import { createAction, props } from '@ngrx/store';
import { Item } from '@models/item.model';

export const addItemToCart = createAction('[Cart] Add Item', props<{ item: Item }>());
export const removeItemFromCart = createAction('[Cart] Remove Item', props<{ itemId: string }>());
export const clearCart = createAction('[Cart] Clear Cart');
