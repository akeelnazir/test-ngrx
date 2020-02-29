import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Region } from './model';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  get regions$(): Observable<Region[]> {
    return of([{ id: 0, name: 'Asia' }, { id: 1, name: 'Europe' }]);
  }
}
