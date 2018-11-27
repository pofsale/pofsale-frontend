import { Action } from '@ngrx/store';
import { CategoryActionType } from './category.actions';

export const getCategories = state => state.categories;

export function categoryReducer(state = [], action: Action) {
  switch (action.type) {
    case CategoryActionType.LOAD_ALL_SUCCESS:
      return action['payload'];
    default:
      return state;
  }
}
