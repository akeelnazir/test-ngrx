import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { countriesReducer } from './reducers';
import { CountryEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature('countries', countriesReducer), EffectsModule.forFeature([CountryEffects])]
})
export class CountriesStateModule {}
