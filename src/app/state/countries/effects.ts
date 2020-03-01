import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { CountriesService } from './service';
import * as countryActions from './actions';
import { Country } from './model';

@Injectable()
export class CountryEffects {

  @Effect()
  getCountries$ = this.actions$.pipe(
    ofType(countryActions.CountryActionTypes.Load),
    switchMap(() => this.service.countries$.pipe(
      map((countries: Country[]) => {
        return new countryActions.LoadSuccess(countries);
      })
    )));

  constructor(
    private actions$: Actions,
    private service: CountriesService
  ) {}
}
