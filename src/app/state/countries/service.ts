import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  get countries$(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/region/europe');
  }

  constructor(private http: HttpClient) {}
}
