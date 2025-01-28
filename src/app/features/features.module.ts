// features/features.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule, CartComponent],
  exports: []  // Export the component for use in other modules
})
export class FeaturesModule {}
