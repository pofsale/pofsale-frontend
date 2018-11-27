import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, from, Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { AppState } from '../ngrx/app.state';
import { LoadAllCategoriesAction } from '../ngrx/category/category.actions';
import { LoadAllProductsAction } from './../ngrx/product/product.actions';
import {
  getProductsByCategory,
  getProducts,
} from './../ngrx/product/product.reducer';
import { Category } from '../models/category.model';
import { until } from 'protractor';
import { takeUntil } from 'rxjs/operators';
import { ViewRef } from '@angular/core/src/render3/view_ref';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public category: Category;
  public products: Product[] = null;
  public onNext$ = new Subject<boolean>();

  @ViewChild('appOrder')
  appOrder: OrderComponent;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadAllCategoriesAction());
    this.store.dispatch(new LoadAllProductsAction());
  }

  onCategorySelect(cat: Category) {
    this.category = cat;
    this.getProducts();
  }

  getProducts() {
    if (this.category == null) {
      this.store
        .pipe(
          select(getProducts),
          takeUntil(this.onNext$)
        )
        .subscribe(ps => (this.products = ps));
    } else {
      this.store
        .pipe(
          select(getProductsByCategory(this.category.name)),
          takeUntil(this.onNext$)
        )
        .subscribe(ps => (this.products = ps));
    }
  }

  onProductClicked(product: Product) {
    this.appOrder.addProduct(product);
  }
}
