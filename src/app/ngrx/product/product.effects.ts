import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProductActionType } from './product.actions';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType(ProductActionType.LOAD_ALL),
    switchMap(() =>
      this.httpClient.get<Product[]>('assets/products.json').pipe(
        map(data => ({
          type: ProductActionType.LOAD_ALL_SUCCESS,
          payload: data,
        })),
        catchError(() => of({ type: 'LOAD_FAILED' }))
      )
    )
  );
}
