import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'add-customer-modal',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  dismissModal() {
    this.modalCtrl.dismiss();
  }

  

}
