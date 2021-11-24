import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../state';
import * as actions from '../actions';

export const rootReducer = (state: State, action: Action) => reducer(state, action);

const reducer = createReducer(initialState,

  //Product Reducers
  on(actions.getProducts, (state) => ({ ...state, isFetching: true })),
  on(actions.getProductsSuccess, (state, { products }) => ({ ...state, products: [...products] })),
  on(actions.getProductsFail, (state) => ({ ...state, products: [] })),

  //Customer Reducers
  on(actions.getCustomers, (state) => ({ ...state, isFetching: true })),
  on(actions.getCustomersSuccess, (state, { customers }) => ({ ...state, customers: [...customers] })),
  on(actions.getCustomersFail, (state) => ({ ...state, customers  : [] })),

  // on(actions.addVehicle, (state, { vehicle }) => ({ ...state, vehicle: vehicle })),
  // on(actions.updateVehiclesLineInspection, (state, action) => {
  //   let newVehicles = [...state.vehicles];
  //   const objectIndex = newVehicles.findIndex(item => (item.id === 9))

  //   if (objectIndex === -1) return state;
  //   newVehicles[objectIndex] = action.vehicle;
    
  //   return {
  //     ...state,
  //     vehicles: [...newVehicles]
  //   }
  // }),
);

