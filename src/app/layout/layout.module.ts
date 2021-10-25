import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithMenuLayoutComponent } from './components/with-menu-layout/with-menu-layout.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [WithMenuLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  exports: [WithMenuLayoutComponent]
})
export class LayoutModule { }
