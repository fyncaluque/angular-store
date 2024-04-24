import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '@api/products.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export default class DetailsComponent implements OnInit {
  private _productsService = inject(ProductsService);
  public productId = input<number>(0, { alias: 'id' });
  public product!: Signal<Product | undefined>;

  ngOnInit(): void {
    this.product = this._productsService.getProductId(this.productId());
  }

  onAddtoCart(): void {}
}
