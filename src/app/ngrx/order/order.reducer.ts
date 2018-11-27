import { Action } from '@ngrx/store';
import { OrderActionType } from './order.actions';

export const getOrder = state => state.order;

export function orderReducer(state = [], action: Action) {
  switch (action.type) {
    case OrderActionType.ADD_ITEM:
      return [...state, action['payload']];

    case OrderActionType.UPDATE_ITEM:
      return state.map(item =>
        item.product.id === action['payload'].product.id
          ? action['payload']
          : item
      );

    case OrderActionType.REMOVE_ITEM:
      return state.filter(item => item.product.id !== action['payload'].id);

    case OrderActionType.RESET:
      return [];

    default:
      return state;
  }
}
