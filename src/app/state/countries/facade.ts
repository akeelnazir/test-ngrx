import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CountriesState } from './state';
import * as countriesActions from './actions';
import * as countriesSelectors from './selectors';
import { Country } from './model';

@Injectable({ providedIn: 'root' })
export class CountriesFacade {
  readonly countries$ = this.store.select(countriesSelectors.getAllCountries);
  readonly getCountriesLoadingStatus$ = this.store.select(countriesSelectors.getCountryLoadingStatus);
  readonly getSelectedCountryId$ = this.store.select(countriesSelectors.getSelectedCountryId);
  readonly getSelectedCountry$ = this.store.select(countriesSelectors.getSelectedCountry);

  constructor(private store: Store<CountriesState>) {}

  loadCountries(region: string): void {
    this.store.dispatch(new countriesActions.Load(region));
  }

  selectCountry(region: Country) {
    this.store.dispatch(new countriesActions.SetCurrentCountry(region));
  }

  clearSelectedCountry() {
    this.store.dispatch(new countriesActions.InitCurrentCountry());
  }
}
