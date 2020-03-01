import { RegionsState } from './regions/state';
import { CountriesState } from './countries/state';

export interface AppState {
  regions: RegionsState;
  countries: CountriesState;
}
