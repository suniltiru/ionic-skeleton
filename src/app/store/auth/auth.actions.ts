import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>() // Payload for login action
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any; token: string }>() // Payload for successful login
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>() // Payload for failed login
);

export const logout = createAction('[Auth] Logout');

export const loadUserFromStorage = createAction('[Auth] Load User From Storage');
