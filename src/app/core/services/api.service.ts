import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * GET request
   * @param url - The API endpoint
   * @param params - Optional query parameters
   * @returns Observable
   */
  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params });
  }

  /**
   * POST request
   * @param url - The API endpoint
   * @param body - The request payload
   * @param headers - Optional headers
   * @returns Observable
   */
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers });
  }

  /**
   * PUT request
   * @param url - The API endpoint
   * @param body - The request payload
   * @returns Observable
   */
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  /**
   * DELETE request
   * @param url - The API endpoint
   * @returns Observable
   */
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
