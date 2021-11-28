import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';
import { AddCustomerComponent } from './components/modals/add-customer/add-customer.component';
import { CustomerLoadingComponent } from './components/loading/item-loading/customer-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule
  ],
  declarations: [CustomersPage, CustomerLoadingComponent]
})
export class CustomersPageModule {}
