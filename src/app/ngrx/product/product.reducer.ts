import { Action } from '@ngrx/store';
import { ProductActionType } from './product.actions';

export function productReducer(state = [], action: Action) {
  switch (action.type) {
    case ProductActionType.LOAD_ALL_SUCCESS:
      return action['payload'];
    default:
      return state;
  }
}
