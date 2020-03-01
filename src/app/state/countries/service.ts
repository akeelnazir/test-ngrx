import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries$(region: string): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  constructor(private http: HttpClient) {}
}
