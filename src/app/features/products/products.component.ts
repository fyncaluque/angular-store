import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  private readonly _productService = inject(ProductsService);
  public products = this._productService.products;
}
