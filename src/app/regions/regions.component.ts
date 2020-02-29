import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Region } from '../state/regions/model';
import { RegionState } from '../state/regions/reducers';
import * as regionActions from '../state/regions/actions';
import * as regionSelectors from '../state/regions/selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions$: Observable<Region[]>;

  constructor(private store: Store<RegionState>) { }

  ngOnInit(): void {
    this.store.dispatch(new regionActions.Load());
    this.regions$ = this.store.pipe(select(regionSelectors.getAllRegions));
  }

}
