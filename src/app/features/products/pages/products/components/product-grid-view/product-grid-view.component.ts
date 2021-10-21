import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/features/products/models/Product';

@Component({
  selector: 'product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.scss'],
})

export class ProductGridViewComponent implements OnInit {

  @Input() products: Product[];

  @Output() cartClicked: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  onClickCart(item: Product){  
    this.cartClicked.emit(item);
  }

}
