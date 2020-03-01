import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Region } from '../state/regions/model';
import { RegionsFacade } from '../state/regions/facade';
import { CountriesFacade } from '../state/countries/facade';
import { Country } from '../state/countries/model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  regions$: Observable<Region[]>;
  region$: Observable<Region>;

  countries$: Observable<Country[]>;
  countriesLoadingStatus$: Observable<boolean>;

  constructor(private regionsFacade: RegionsFacade, private countriesFacade: CountriesFacade) { }

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$;
    this.region$ = this.regionsFacade.getSelectedRegion$;

    this.countries$ = this.countriesFacade.countries$;
    this.countriesLoadingStatus$ = this.countriesFacade.getCountriesLoadingStatus$;
  }

  onRegionSelectionChange(event: Region) {
    this.regionsFacade.selectRegion(event);
  }

  onCountrySelectionChange(event: Country) {
    this.countriesFacade.selectCountry(event);
  }

}
