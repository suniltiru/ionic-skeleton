import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, throwError, Observable } from 'rxjs';
import { loginSuccess, loginFailure, logout } from '@store/auth/auth.actions';
import { StorageService } from '@services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  constructor(
    private http: HttpClient,
    private store: Store,
    private storageService: StorageService
  ) {}

  /**
   * Perform login with username and password
   * @param username
   * @param password
   * @returns Observable<void>
   */
  login(username: string, password: string): Observable<{ user: any; token: string }> {
    return this.http.post<{ user: any; token: string }>('/api/login', { username, password });
  }

  /**
   * Perform logout
   */
  async logout() {
    await this.storageService.remove(this.TOKEN_KEY);
    await this.storageService.remove(this.USER_KEY);
    this.store.dispatch(logout());
  }

  /**
   * Load user and token from storage on app load
   */
  async loadUserFromStorage() {
    const token = await this.storageService.get<string>(this.TOKEN_KEY);
    const user = await this.storageService.get<any>(this.USER_KEY);

    if (token && user) {
      this.store.dispatch(loginSuccess({ user, token }));
    }
  }

  /**
   * Save token to storage
   * @param token
   */
  private async saveToken(token: string) {
    await this.storageService.set(this.TOKEN_KEY, token);
  }

  /**
   * Save user to storage
   * @param user
   */
  private async saveUser(user: any) {
    await this.storageService.set(this.USER_KEY, user);
  }
}
