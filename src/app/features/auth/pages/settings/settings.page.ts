import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  options = [
    { title: 'Printer', url: '/printer', icon: 'assets/icons/print_icon.png' },
    { title: 'Taxes', url: '/taxes', icon: 'assets/icons/taxes_icon.png' },
    { title: 'General', url: '/general', icon: 'assets/icons/general_icon.png' },
  ];
  constructor(

    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    
  }

}
