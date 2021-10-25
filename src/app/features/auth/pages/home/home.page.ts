import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  options: any = [
    {
      name: "Customers",
      icon: "people-outline",
      url: "customers"
    },
    {
      name: "Products",
      icon: "pricetags-outline",
      url: "products"
    },
    {
      name: "Sales",
      icon: "stats-chart-outline",
      url: "sales"
    },
    {
      name: "Reports",
      icon: "analytics-outline",
      url: "reports"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
