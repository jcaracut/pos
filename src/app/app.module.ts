import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpModule, BrowserXhr, RequestOptions } from '@angular/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserHook } from './core/hooks/browser.hook';
import { POSStoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';


// import { RequestOptionsHook } from './hooks/request-options.hook';
// import { TokenProvider } from './provider/token.provider';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    POSStoreModule,
  ],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: BrowserXhr, useClass: BrowserHook },
    // { provide: RequestOptions, useClass: RequestOptionsHook, deps: [TokenProvider] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
