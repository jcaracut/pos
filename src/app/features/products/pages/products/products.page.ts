import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/features/customers/models/Customer';

import * as actions from 'src/app/store/actions'
import * as selectors from 'src/app/store/selectors/root.selectors'
import { State } from 'src/app/store/state';
import { Product } from '../../models/Product';
import { CreateItemComponent } from './components/modals/create-item/create-item.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  isListView: boolean = false;
  isFetching: boolean;

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<State>,
    private modalCtrl: ModalController
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    });
  }

  async ngOnInit() {
    this.subscriptions.push(
      this.store.pipe(select(selectors.getProducts)).subscribe(products => {
        this.products = products;
        this.isFetching = false;
      }, err => {
        this.isFetching = false;
      }),
      // this.store.pipe(select(selectors.getCustomers)).subscribe(customers => {
      //   this.customers = customers;
      // }, err => {
      // }),
    );

    await this.init();
  }

  async init() {
    this.isFetching = true;
    this.store.dispatch(actions.getProducts());
    // this.store.dispatch(actions.getCustomers());
  }

  search(searchText: string) {
    // alert("Search: " + searchText);
  }

  async openAddItemModal(){
    let modal = await this.modalCtrl.create({
      component: CreateItemComponent,
      cssClass: '',
    });
    modal.present();
  }

  // changeView(isListView: boolean) {
  //   this.isListView = isListView;
  // }

  // checkout(url: string) {
  //   this.router.navigateByUrl(url);
  // }

  // addToCart(item: Product) {
  //   this.myCart.push(item);
  // }

  // addFavorite(item: Product) {

  // }

}
