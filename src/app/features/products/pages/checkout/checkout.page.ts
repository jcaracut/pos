import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  
  number: string = '';

  constructor() { }

  ngOnInit() {
  }

  appendNumber(num: string){
    this.number += num;
  }

  deleteNumber(){
    this.number = this.number.slice(0, -1);
  }

}
