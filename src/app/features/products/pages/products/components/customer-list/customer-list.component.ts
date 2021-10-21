import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {

  list = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
  ]

  filteredList = [];
  text: string;
  input: string;

  constructor(private modalCtrl: ModalController) {
    this.filteredList = this.list.slice();
  }

  onInputChange() {
    this.filteredList = this.list.filter((item: string) => {
      return item.toLowerCase().indexOf(this.input.toLowerCase()) > -1
    })
  }

  onItemClick(item) {
    this.modalCtrl.dismiss({item: item})
  }

  ngOnInit() {}


}
