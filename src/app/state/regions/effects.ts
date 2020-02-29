import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { RegionsService } from './service';
import * as regionActions from './actions';
import { Region } from './model';

@Injectable()
export class RegionEffects {

  @Effect()
  getRegions$ = this.actions$.pipe(
    ofType(regionActions.RegionActionTypes.Load),
    switchMap(() => this.service.regions$.pipe(
      map((regions: Region[]) => new regionActions.LoadSuccess(regions))
    )));

  constructor(
    private actions$: Actions,
    private service: RegionsService
  ) {}
}
