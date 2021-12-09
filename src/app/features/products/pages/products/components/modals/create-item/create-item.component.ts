import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
