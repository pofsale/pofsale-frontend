import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderItem } from 'src/app/models/order-item.model';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/ngrx/app.state';
import { getOrder } from 'src/app/ngrx/order/order.reducer';
import {
  AddOrderItemAction,
  UpdateOrderItemAction,
  RemoveOrderItemAction,
  ResetOrderAction,
} from './../../ngrx/order/order.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  order: OrderItem[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getOrder),
        takeUntil(this.destroyed$)
      )
      .subscribe(order => (this.order = order));
  }

  addProduct(product: Product, amount: number = 1) {
    const arr = this.order.filter(p => p.product.id === product.id);
    if (arr.length > 0) {
      this.store.dispatch(
        new UpdateOrderItemAction(<OrderItem>{
          amount: amount + arr[0].amount,
          product: product,
        })
      );
    } else {
      this.store.dispatch(
        new AddOrderItemAction(<OrderItem>{
          product: product,
          amount: amount,
        })
      );
    }
  }

  removeProduct(product: OrderItem) {
    if (product.amount === 1) {
      this.store.dispatch(new RemoveOrderItemAction(product.product));
    } else {
      this.store.dispatch(
        new UpdateOrderItemAction(<OrderItem>{
          product: product.product,
          amount: product.amount - 1,
        })
      );
    }
  }

  reset() {
    this.store.dispatch(new ResetOrderAction());
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
