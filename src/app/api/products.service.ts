import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Product } from '@models/product.model';
import { environment } from 'environments/environment.development';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _http = inject(HttpClient);
  private readonly _api = environment.API_URL;
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

  getProductId(id: number): Observable<Product> {
    return this._http.get<Product>(`${this._api}/products/${id}`);
  }
}
