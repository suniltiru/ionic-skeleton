import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
  user: any | null;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    error,
  })),
  on(logout, () => ({
    ...initialAuthState,
  }))
);
