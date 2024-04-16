import { CurrencyPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, TitleCasePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public product = input.required<Product>();
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart() {
    this.addToCartEvent.emit(this.product());
  }
}
