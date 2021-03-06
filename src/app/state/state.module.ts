import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { appReducer } from './app.reducer';
import { RegionEffects } from './regions/effects';
import { CountryEffects } from './countries/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, { metaReducers: [] }),
    EffectsModule.forRoot([RegionEffects, CountryEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }
}
