import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPageRoutingModule } from './reports-routing.module';

import { ReportsPage } from './reports.page';
import { GetFirstnamePipe } from 'src/app/core/pipes/get-firstname.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsPageRoutingModule
  ],
  declarations: [
    ReportsPage,
    GetFirstnamePipe,
  ]
})
export class ReportsPageModule {}
