import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Region } from './state/model';
import { RegionsFacade } from './state/facade';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions$: Observable<Region[]>;
  region$: Observable<Region>;

  constructor(private regionsFacade: RegionsFacade) { }

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$;
    this.region$ = this.regionsFacade.getSelectedRegion$;
  }

  onRegionSelectionChange(event: Region) {
    this.regionsFacade.selectRegion(event);
  }

}
