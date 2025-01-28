import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShoppingPageRoutingModule } from './shopping-routing.module';
import { ShoppingPage } from './shopping.page';
import { CartComponent } from '../../features/cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';





@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    ShoppingPageRoutingModule,
    TranslateModule,
    CartComponent
  ],
  declarations: [ShoppingPage],
})
export class ShoppingPageModule {}
