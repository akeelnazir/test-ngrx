import { Country } from './model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: (model: Country) => model.numericCode
});

export interface CountriesState extends EntityState<Country> {
  selectedCountryId: number | null;
  countries: Country[];
  loading: boolean;
}

export const initialCountriesState: CountriesState = adapter.getInitialState({
  selectedCountryId: null,
  countries: [],
  loading: false
});
