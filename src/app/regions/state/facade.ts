import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RegionsState } from './state';
import * as regionsActions from './actions';
import * as regionsSelectors from './selectors';
import { Region } from './model';

@Injectable({ providedIn: 'root' })
export class RegionsFacade {
  readonly regions$ = this.store.select(regionsSelectors.getAllRegions);
  readonly getRegionsLoadingStatus$ = this.store.select(regionsSelectors.getRegionLoadingStatus);
  readonly getSelectedRegionId$ = this.store.select(regionsSelectors.getSelectedRegionId);
  readonly getSelectedRegion$ = this.store.select(regionsSelectors.getSelectedRegion);

  constructor(private store: Store<RegionsState>) {
    this.loadRegions();
  }

  loadRegions(): void {
    this.store.dispatch(new regionsActions.Load());
  }

  selectRegion(region: Region) {
    this.store.dispatch(new regionsActions.SetCurrentRegion(region));
  }

  clearSelectedRegion() {
    this.store.dispatch(new regionsActions.InitCurrentRegion());
  }
}
