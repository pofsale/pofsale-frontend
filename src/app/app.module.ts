import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryBarComponent } from './dashboard/category-bar/category-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryEffects } from './ngrx/category/category.effects';
import { categoryReducer } from './ngrx/category/category.reducer';
import { ProductEffects } from './ngrx/product/product.effects';
import { productReducer } from './ngrx/product/product.reducer';
import { OrderComponent } from './dashboard/order/order.component';
import { orderReducer } from './ngrx/order/order.reducer';
import { OrderEffects } from './ngrx/order/order.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryBarComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      order: orderReducer,
      products: productReducer,
      categories: categoryReducer,
    }),
    EffectsModule.forRoot([OrderEffects, ProductEffects, CategoryEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
