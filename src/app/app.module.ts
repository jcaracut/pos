import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpModule } from '@angular/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { POSStoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot({
      name: 'pos_mobile',
    }),
    AppRoutingModule,
    POSStoreModule,
    LayoutModule,
  ],
  providers: [
    BluetoothSerial,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
