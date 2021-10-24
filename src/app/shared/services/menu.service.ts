import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private menu: MenuController) { }

  open(menuId: string) {
    this.menu.enable(true, menuId);
    this.menu.open(menuId);
  }
}
