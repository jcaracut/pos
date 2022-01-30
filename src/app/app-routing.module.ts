import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { WithMenuLayoutComponent } from './layout/components/with-menu-layout/with-menu-layout.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    component: WithMenuLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/auth/pages/home/home.module').then(m => m.HomePageModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/auth/pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./features/products/pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
      },
    ]
  },
  {
    path: 'customers',
    loadChildren: () => import('./features/customers/pages/customers/customers.module').then(m => m.CustomersPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/pages/products/products.module').then(m => m.ProductsPageModule)
  },
  
  {
    path: 'welcome',
    loadChildren: () => import('./features/auth/pages/welcome/welcome.module').then( m => m.WelcomePageModule),
  },
  {
    path: 'reports',
    loadChildren: () => import('./features/reports/pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'sales-revenue',
    loadChildren: () => import('./features/reports/pages/sales-revenue/sales-revenue.module').then( m => m.SalesRevenuePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/products/pages/cart/cart.module').then( m => m.CartPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
