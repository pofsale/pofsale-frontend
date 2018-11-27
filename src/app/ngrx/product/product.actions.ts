import { Action } from '@ngrx/store';

export class ProductActionType {
  static LOAD_ALL = '[Products] load all';
  static LOAD_ALL_SUCCESS = '[Products] load all success';
  static LOAD_ALL_FAILED = '[Products] load all failed';
}

export class LoadAllProductsAction implements Action {
  readonly type = ProductActionType.LOAD_ALL;
}
