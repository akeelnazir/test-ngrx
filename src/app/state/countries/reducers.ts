import { CountryActions, CountryActionTypes } from './actions';
import { initialCountriesState, CountriesState } from './state';

export function countriesReducer(state = initialCountriesState, action: CountryActions): CountriesState {
  switch (action.type) {
    case CountryActionTypes.Load:
      return {
        ...state,
        loading: true
      };

    case CountryActionTypes.LoadSuccess:
      return {
        ...state,
        countries: action.payload,
        loading: false
      };

    case CountryActionTypes.SetCurrentCountry:
      return {
        ...state,
        selectedCountryId: action.payload.numericCode
      };

    case CountryActionTypes.InitCurrentCountry:
      return {
        ...state,
        selectedCountryId: 0
      };

    default:
      return state;
  }
}
