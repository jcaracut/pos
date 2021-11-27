import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State } from 'src/app/store/state';
import { Customer } from '../../models/Customer';
import * as actions from 'src/app/store/actions';
import * as selectors from 'src/app/store/selectors/root.selectors';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  subscriptions: Subscription [] = [];
  isFetching = false;
  customers: Customer [] = [];

  constructor(private store: Store<State>) { }

  async ngOnInit() {
    this.subscriptions.push(
      this.store.pipe(select(selectors.getCustomers)).subscribe(customers => {
        this.customers = customers;
      }, err => {
      }),
    );

    await this.init();
  }

  async init() {
    this.isFetching = true;
    this.store.dispatch(actions.getCustomers());
  }

}
