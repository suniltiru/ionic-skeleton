// app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',  // Path for lazy-loaded feature module
    loadChildren: () => import('./pages/shopping/shopping.module').then(m => m.ShoppingPageModule)
  },
  {
    path: '',  // Default route
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
