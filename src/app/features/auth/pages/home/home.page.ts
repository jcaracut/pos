import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrinterProvider } from 'src/app/core/providers/printer.provider';
import { UserProvider } from 'src/app/core/providers/user.provider';

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
      icon: "assets/icons/icon_4.png",
      name: "customers"
    },
    {
      icon: "assets/icons/icon_5.png",
      name: "products"
    },
    {
      icon: "assets/icons/icon_6.png",
      name: "sales"
    },
    {
      icon: "assets/icons/icon_7.png",
      name: "reports"
    },
    
  ];

  list: any = [];
  selectedPrinter: any

  constructor(private printer: PrinterProvider, private userProvider: UserProvider,) { }

  async ngOnInit() {
    let user = await this.userProvider.Get()
    console.log(user, "diriii")
  }

  // FOR BLUETOOTH PRINTING
  // async scanPrinters() {
  //   console.log("searching")
  //   await this.printer.searchBluetooth().then(data => this.list = data);
  //   await console.log(this.list)
  // }

  // connectPrinter(printer){
  //   this.subscription = this.printer.connectBluetooth(printer).subscribe();
  // }

  // disconnectPrinter(){
  //   this.printer.disconnectBluetooth().then((data) => console.log("disconnected", data));
  //   this.subscription.unsubscribe();
  // }

  // async print() {
  //   console.log("printing")
  //   const blob = new Blob([this.stringVal], { type: 'text/plain; charset=utf-8' });

  //   blob.arrayBuffer().then(async buffer => {
  //     this.printer.printData(buffer).catch((err) => {
  //       console.log(err)
  //     }).then(() => {
  //       console.log("done printing")
  //     })
  //   });
  // }

  // selectPrinter(printer) {
  //   console.log("Selected :", printer)
  //   this.selectedPrinter = printer;
  // }

}