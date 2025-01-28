import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private activeRequests = 0;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.activeRequests++;
    this.showLoading();

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.hideLoading();
        }
      })
    );
  }

  private async showLoading() {
    if (this.activeRequests === 1) {
      const loading = await this.loadingController.create({
        message: 'Loading...',
        spinner: 'crescent',
      });
      await loading.present();
    }
  }

  private async hideLoading() {
    if (this.activeRequests === 0) {
      await this.loadingController.dismiss();
    }
  }

  private async handleError(error: HttpErrorResponse) {
    const message = error.error?.message || 'An unexpected error occurred.';
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
    });
    await toast.present();
  }
}
