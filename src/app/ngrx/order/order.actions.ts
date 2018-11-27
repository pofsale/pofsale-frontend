import { Product } from 'src/app/models/product.model';
import { Action } from '@ngrx/store';
import { OrderItem } from 'src/app/models/order-item.model';

export class OrderActionType {
  static ADD_ITEM = '[Order] add item';
  static UPDATE_ITEM = '[Order] update item';
  static REMOVE_ITEM = '[Order] remove item';
  static RESET = '[Order] reset';
}

export class AddOrderItemAction implements Action {
  readonly type = OrderActionType.ADD_ITEM;

  constructor(public payload: OrderItem) {}
}

export class UpdateOrderItemAction implements Action {
  readonly type = OrderActionType.UPDATE_ITEM;

  constructor(public payload: OrderItem) {}
}

export class RemoveOrderItemAction implements Action {
  readonly type = OrderActionType.REMOVE_ITEM;

  constructor(public payload: Product) {}
}

export class ResetOrderAction implements Action {
  readonly type = OrderActionType.RESET;
}
