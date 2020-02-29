import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegions from './reducers';

export const getRegionsFeatureState = createFeatureSelector<fromRegions.RegionState>('regions');

export const getRegionLoadingStatus = createSelector(
  getRegionsFeatureState,
  state => state.loading
);

export const getAllRegions = createSelector(
  getRegionsFeatureState,
  state => state.regions
);

export const getSelectedRegionId = createSelector(
  getRegionsFeatureState,
  state => state.selectedRegionId
);

export const getSelectedRegion = createSelector(
  getRegionsFeatureState,
  getSelectedRegionId,
  (state, selectedRegionId) => {
    if (selectedRegionId === 0) {
      return null;
    } else {
      return selectedRegionId ? state.regions.find(r => r.id === selectedRegionId) : null;
    }
  }
);

