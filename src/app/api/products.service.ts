import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  Signal,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Product } from '@models/product.model';
import { environment } from 'environments/environment.development';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _http = inject(HttpClient);
  private readonly _api = environment.API_URL;
  private readonly _injector = inject(EnvironmentInjector);
  public products = signal<Product[]>([]);

  constructor() {
    this.getProducts();
  }

  getProducts(): void {
    this._http
      .get<Product[]>(`${this._api}/products?sort=desc`)
      .pipe(tap((data: Product[]) => this.products.set(data)))
      .subscribe();
  }

  getProductId(id: number): Signal<Product | undefined> {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(this._http.get<Product>(`${this._api}/products/${id}`))
    );
  }
}
