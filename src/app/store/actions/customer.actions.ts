import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/features/customers/models/Customer';

enum CustomersActions {
  getCustomers = '[POS] Get Customers',
  getCustomersSuccess = '[POS] Get Customers Success',
  getCustomersFail = '[POS] Get Customers Fail',
}

export const getCustomers = createAction(CustomersActions.getCustomers);
export const getCustomersSuccess = createAction(CustomersActions.getCustomersSuccess, props<{ customers: Customer[] }>());
export const getCustomersFail = createAction(CustomersActions.getCustomersFail);

