import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StarRatingModule } from 'ionic5-star-rating';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { ProductGridViewComponent } from './components/product-grid-view/product-grid-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { CustomSearchBarComponent } from './components/custom-search-bar/custom-search-bar.component';
import { CustomSideBarComponent } from './components/custom-side-bar/custom-side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    StarRatingModule,
  ],
  declarations: [
    ProductsPage,
    ProductGridViewComponent,
    ProductListViewComponent,
    LoadingComponent,
    CustomSearchBarComponent,
    CustomSideBarComponent,
  ]
})
export class ProductsPageModule {}
