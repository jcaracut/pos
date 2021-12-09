import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { ItemLoadingComponent } from './components/loading/item-loading/item-loading.component';
import { CreateItemComponent } from './components/modals/create-item/create-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage, ItemLoadingComponent, CreateItemComponent]
})
export class ProductsPageModule {}
