import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import { regionsReducer } from './regions/reducers';

export const appReducer: ActionReducerMap<AppState> = {
  regions: regionsReducer
};
