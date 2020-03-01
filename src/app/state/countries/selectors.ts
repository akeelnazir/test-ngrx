import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCountries from './state';

export const getCountriesFeatureState = createFeatureSelector<fromCountries.CountriesState>('countries');

export const getCountryLoadingStatus = createSelector(
  getCountriesFeatureState,
  state => state.loading
);

export const getAllCountries = createSelector(
  getCountriesFeatureState,
  state => state.countries
);

export const getSelectedCountryId = createSelector(
  getCountriesFeatureState,
  state => state.selectedCountryId
);

export const getSelectedCountry = createSelector(
  getCountriesFeatureState,
  getSelectedCountryId,
  (state, selectedCountryId) => {
    return selectedCountryId !== null ? state.countries.find(r => r.numericCode === selectedCountryId) : null;
  }
);

