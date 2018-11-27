import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { CategoryActionType } from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType(CategoryActionType.LOAD_ALL),
    switchMap(() =>
      this.httpClient.get<Category[]>('assets/categories.json').pipe(
        map(data => ({
          type: CategoryActionType.LOAD_ALL_SUCCESS,
          payload: data,
        })),
        catchError(() => of({ type: CategoryActionType.LOAD_ALL_FAILED }))
      )
    )
  );
}
