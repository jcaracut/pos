import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrinterProvider } from 'src/app/core/providers/printer.provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subscription: Subscription = new Subscription();

  stringVal: string = "";

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

  list: any = [];
  selectedPrinter: any

  constructor(private printer: PrinterProvider) { }

  async ngOnInit() {

    // // await this.printer.searchBluetooth().then(data => this.list = data);
    // await this.printer.scanBluetooth().then(data => console.log("scanning", data));
  }

  async scanPrinters() {
    console.log("searching")
    await this.printer.searchBluetooth().then(data => this.list = data);
    await console.log(this.list)
  }

  connectPrinter(printer){
    this.subscription = this.printer.connectBluetooth(printer).subscribe();
  }

  disconnectPrinter(){
    this.printer.disconnectBluetooth().then((data) => console.log("disconnected", data));
    this.subscription.unsubscribe();
  }

  async print() {
    console.log("printing")

    const blob = new Blob([this.stringVal], { type: 'text/plain; charset=utf-8' });

    blob.arrayBuffer().then(async buffer => {
      this.printer.printData(buffer).catch((err) => {
        console.log(err)
      }).then(() => {
        console.log("done printing")
      })
    });



  }

  selectPrinter(printer) {
    console.log("Selected :", printer)
    this.selectedPrinter = printer;
  }

}