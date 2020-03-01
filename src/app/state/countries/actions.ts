import { Action } from '@ngrx/store';
import { Country } from './model';

export enum CountryActionTypes {
  Load = '[Countries] Load',
  LoadSuccess = '[Countries] Load Success',
  SetCurrentCountry = '[Countries] Set Current Country',
  InitCurrentCountry = '[Countries] Init Current Country'
}

export class Load implements Action {
  readonly type = CountryActionTypes.Load;
  constructor(public region: string) {}
}

export class LoadSuccess implements Action {
  readonly type = CountryActionTypes.LoadSuccess;
  constructor(public payload: Country[]) {}
}

export class SetCurrentCountry implements Action {
  readonly type = CountryActionTypes.SetCurrentCountry;
  constructor(public payload: Country) {}
}

export class InitCurrentCountry implements Action {
  readonly type = CountryActionTypes.InitCurrentCountry;
}

export type CountryActions = Load | LoadSuccess | SetCurrentCountry | InitCurrentCountry;
