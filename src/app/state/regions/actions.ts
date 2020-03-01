import { Action } from '@ngrx/store';
import { Region } from './model';

export enum RegionActionTypes {
  Load = '[Regions] Load',
  LoadSuccess = '[Regions] Load Success',
  SetCurrentRegion = '[Regions] Set Current Region',
  InitCurrentRegion = '[Regions] Init Current Region'
}

export class Load implements Action {
  readonly type = RegionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = RegionActionTypes.LoadSuccess;
  constructor(public payload: Region[]) {}
}

export class SetCurrentRegion implements Action {
  readonly type = RegionActionTypes.SetCurrentRegion;
  constructor(public payload: Region) {}
}

export class InitCurrentRegion implements Action {
  readonly type = RegionActionTypes.InitCurrentRegion;
}

export type RegionActions = Load | LoadSuccess | SetCurrentRegion | InitCurrentRegion;
