import { RegionActions, RegionActionTypes } from './actions';
import { initialRegionsState, RegionsState } from './state';

export function regionsReducer(state = initialRegionsState, action: RegionActions): RegionsState {
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
