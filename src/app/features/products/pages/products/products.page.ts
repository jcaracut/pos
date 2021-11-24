import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/Product';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/state';
import * as selectors from 'src/app/store/selectors/root.selectors';
import * as actions from 'src/app/store/actions';
import { Customer } from 'src/app/features/customers/models/Customer';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnDestroy {

  products: Product[] = [];

  myCart: Product[] = [];
  customers: Customer[] = [];

  isListView: boolean = false;
  isFetching: boolean;

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<State>
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
      this.store.pipe(select(selectors.getCustomers)).subscribe(customers => {
        this.customers = customers;
      }, err => {
      }),
    );

    await this.init();
  }

  async init() {
    this.isFetching = true;
    this.store.dispatch(actions.getProducts());
    this.store.dispatch(actions.getCustomers());
  }

  search(searchText: string) {
    // alert("Search: " + searchText);
  }

  changeView(isListView: boolean) {
    this.isListView = isListView;
  }

  checkout(url: string) {
    this.router.navigateByUrl(url);
  }

  addToCart(item: Product) {
    this.myCart.push(item);
  }

  addFavorite(item: Product) {

  }
}
