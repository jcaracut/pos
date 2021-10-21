import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/features/products/models/Product';

enum ProductsActions {
  getProducts = '[POS] Get Products',
  getProductsSuccess = '[POS] Get Products Success',
  getProductsFail = '[POS] Get Products Fail',
}

export const getProducts = createAction(ProductsActions.getProducts);
export const getProductsSuccess = createAction(ProductsActions.getProductsSuccess, props<{ products: Product[] }>());
export const getProductsFail = createAction(ProductsActions.getProductsFail);

