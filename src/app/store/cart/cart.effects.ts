import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { addItemToCart, removeItemFromCart } from './cart.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions) {}

  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemToCart),
      mergeMap(action =>
        of({}).pipe(
          map(() => addItemToCart({ item: action.item })),
          catchError(() => of(removeItemFromCart({ itemId: action.item.id })))
        )
      )
    )
  );
}
