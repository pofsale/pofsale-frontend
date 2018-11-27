import { Action } from '@ngrx/store';

export class CategoryActionType {
  static LOAD_ALL = '[Categories] load all';
  static LOAD_ALL_SUCCESS = '[Categories] load all success';
  static LOAD_ALL_FAILED = '[Categories] load all failed';
}

export class LoadAllCategoriesAction implements Action {
  readonly type = CategoryActionType.LOAD_ALL;
}
