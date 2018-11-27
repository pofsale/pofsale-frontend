import { getCategories } from './../../ngrx/category/category.reducer';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/app.state';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss'],
})
export class CategoryBarComponent implements OnInit {
  @Output()
  categorySelect = new EventEmitter<Category>();

  public categories: Observable<Category[]>;

  public currentCat: Category;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.onCategorySelected(null);
    this.store.pipe(select(getCategories)).subscribe(cats => {
      this.categories = cats;
      if (cats != null && cats.length > 0) {
      }
    });
  }

  onCategorySelected(category: Category) {
    this.currentCat = category;
    this.categorySelect.emit(this.currentCat);
  }
}
