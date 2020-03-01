import { Region } from './model';

export interface RegionsState {
  selectedRegionId: number | null;
  regions: Region[];
  loading: boolean;
}

export const initialRegionsState: RegionsState = {
  selectedRegionId: null,
  regions: [],
  loading: false
};
