import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslationModule } from './translations/translation.module';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpInterceptorService } from '@interceptors/http-interceptor.service';
import { AuthInterceptorService } from '@interceptors/auth-interceptor.service';




import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@store/auth/auth.effects';
import { CartEffects } from '@store/cart/cart.effects';
import { authReducer } from '@store/auth/auth.reducer';
import { cartReducer } from '@store/cart/cart.reducer';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    HttpClientModule,
    AppRoutingModule, 
    TranslationModule,
    StoreModule.forRoot({ auth: authReducer, cart: cartReducer }),
    EffectsModule.forRoot([AuthEffects, CartEffects]),
    IonicStorageModule.forRoot(), 

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
