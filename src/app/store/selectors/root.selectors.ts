import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../state';

export const productFeatureKey = 'pos';

const getState = createFeatureSelector<State>(productFeatureKey);

export const getProducts = createSelector(getState, (state: State) => state.products);



