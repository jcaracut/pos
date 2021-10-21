import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/auth/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./features/customers/pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/products/pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
