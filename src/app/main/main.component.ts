import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Region } from '../state/regions/model';
import { RegionsFacade } from '../state/regions/facade';
import { CountriesFacade } from '../state/countries/facade';
import { Country } from '../state/countries/model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  region$: Observable<Region>;
  regions$: Observable<Region[]>;
  country$: Observable<Country[]>;
  countries$: Observable<Country[]>;
  countriesLoadingStatus$: Observable<boolean>;
  displayedColumns: string[] = ['name', 'capital', 'population', 'flag'];

  constructor(private regionsFacade: RegionsFacade, private countriesFacade: CountriesFacade) { }

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$;
    this.region$ = this.regionsFacade.getSelectedRegion$;

    this.countries$ = this.countriesFacade.countries$;
    this.country$ = this.countriesFacade.getSelectedCountry$.pipe(
      map(country => !!country ? [country] : []));
    this.countriesLoadingStatus$ = this.countriesFacade.getCountriesLoadingStatus$;
  }

  onRegionSelectionChange(region: Region) {
    this.regionsFacade.selectRegion(region);
    this.countriesFacade.loadCountries(region.name);
    this.countriesFacade.clearSelectedCountry();
  }

  onCountrySelectionChange(event: Country) {
    this.countriesFacade.selectCountry(event);
  }

}
