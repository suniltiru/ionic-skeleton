import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action =>
        this.authService.login(action.username, action.password).pipe(
          map(response => loginSuccess({ user: response.user, token: response.token })), // Ensure payload matches
          catchError(error => of(loginFailure({ error: error.message })))
        )
      )
    )
  );
}
