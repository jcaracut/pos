import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/root.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ pos: rootReducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class POSStoreModule { }
