import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export interface AppState {
  readonly categories: Category[];
  readonly products: Product[];
}
