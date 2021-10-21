import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/features/products/models/Product';

@Component({
  selector: 'product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit {

  @Input() products: Product[];

  @Output() cartClicked: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  onClickCart(item: Product){  
    this.cartClicked.emit(item);
  }

}
