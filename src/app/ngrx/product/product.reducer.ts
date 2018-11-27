import { Action, createSelector } from '@ngrx/store';
import { ProductActionType } from './product.actions';

export const getProducts = state => state.products;
export const getProductsByCategory = (cat: String) =>
  createSelector(
    getProducts,
    ps => ps.filter(p => p.category === cat)
  );

export function productReducer(state = [], action: Action) {
  switch (action.type) {
    case ProductActionType.LOAD_ALL_SUCCESS:
      return action['payload'];
    default:
      return state;
  }
}
