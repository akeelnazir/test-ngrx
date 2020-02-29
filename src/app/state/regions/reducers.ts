import { RegionActions, RegionActionTypes } from './actions';
import { Region } from './model';

export interface RegionState {
  selectedRegionId: number | null;
  regions: Region[];
  loading: boolean;
}

export const initialRegionsState: RegionState = {
  selectedRegionId: null,
  regions: [],
  loading: false
};

export function regionsReducer(state = initialRegionsState, action: RegionActions): RegionState {
  switch (action.type) {
    case RegionActionTypes.Load:
      return {
        ...state,
        loading: true
      };

    case RegionActionTypes.LoadSuccess:
      return {
        ...state,
        regions: action.payload,
        loading: false
      };

    case RegionActionTypes.SetCurrentRegion:
      return {
        ...state,
        selectedRegionId: action.payload.id
      };

    case RegionActionTypes.InitCurrentRegion:
      return {
        ...state,
        selectedRegionId: 0
      };

    default:
      return state;
  }
}
