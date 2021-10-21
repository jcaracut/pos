import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithMenuLayoutComponent } from './components/with-menu-layout/with-menu-layout.component';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [WithMenuLayoutComponent, SideMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  exports: [WithMenuLayoutComponent]
})
export class LayoutModule { }
