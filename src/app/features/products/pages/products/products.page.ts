import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/Product';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/state';
import * as selectors from 'src/app/store/selectors/root.selectors';
import * as actions from 'src/app/store/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnDestroy {

  products: Product[] = [];

  myCart: Product[] = [];

  isListView: boolean = false;
  isFetching: boolean;

  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<State>
    ) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async ngOnInit() {
    this.subscription = this.store.pipe(select(selectors.getProducts)).subscribe(product => {
      this.products = product;
      this.isFetching = false;
    }, err => {
      this.isFetching = false;
    });
    await this.init();
  }

  async init() {
    this.isFetching = true;
    this.store.dispatch(actions.getProducts());
  }

  search(searchText: string){
    // alert("Search: " + searchText);
  }

  changeView(isListView: boolean){
    this.isListView = isListView;
  }

  checkout(url: string){
    this.router.navigateByUrl(url);
  }

  addToCart(item: Product){
    this.myCart.push(item);
  }

  addFavorite(item: Product){

  }
}
