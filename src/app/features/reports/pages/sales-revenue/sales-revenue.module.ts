import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesRevenuePageRoutingModule } from './sales-revenue-routing.module';

import { SalesRevenuePage } from './sales-revenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesRevenuePageRoutingModule
  ],
  declarations: [SalesRevenuePage]
})
export class SalesRevenuePageModule {}
