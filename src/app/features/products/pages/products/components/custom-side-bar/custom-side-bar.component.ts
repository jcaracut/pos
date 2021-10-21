import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/features/products/models/Product';

@Component({
  selector: 'custom-side-bar',
  templateUrl: './custom-side-bar.component.html',
  styleUrls: ['./custom-side-bar.component.scss'],
})
export class CustomSideBarComponent implements OnInit {

  @Input() myCart: Product[];
  @Output() checkoutClicked = new EventEmitter<string>();

  discount: number = 60;

  constructor() { }

  ngOnInit() { }

  getTotal(): number {
    let total = 0;
    this.myCart.map(e => total += e.srp_price)
    return total;
  }

  onCheckoutClick(){
    this.checkoutClicked.emit("checkout");
  }


}
