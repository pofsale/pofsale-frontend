import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class OrderEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}
}
