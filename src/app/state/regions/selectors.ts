import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegions from './state';

export const getRegionsFeatureState = createFeatureSelector<fromRegions.RegionsState>('regions');

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
    return selectedRegionId !== null ? state.regions.find(r => r.id === selectedRegionId) : null;
  }
);

