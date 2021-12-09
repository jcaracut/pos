import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesRevenuePage } from './sales-revenue.page';

const routes: Routes = [
  {
    path: '',
    component: SalesRevenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRevenuePageRoutingModule {}
