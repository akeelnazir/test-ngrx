import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from './model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries$(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  constructor(private http: HttpClient) {}
}
