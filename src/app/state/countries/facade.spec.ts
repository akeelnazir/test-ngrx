import { Store, StoreModule } from '@ngrx/store';
import { async, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { It, Mock } from 'typemoq';
import { of } from 'rxjs';

import { CountriesStateModule } from './state.module';
import { CountriesService } from './service';
import { Country } from './model';
import * as countriesAction from './actions';
import { CountriesFacade } from './facade';

describe('CountriesFacade', () => {
  const mockCountries: Country[] = [
    { name: 'A', numericCode: 1 },
    { name: 'B', numericCode: 2 }
  ] as Country[];

  let store: Store<any>;
  let countriesFacade: CountriesFacade;

  const mockCountriesService = Mock.ofType<CountriesService>();

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        CountriesStateModule
      ],
      providers: [
        CountriesFacade,
        { provide: CountriesService, useFactory: () => mockCountriesService.object }
      ]
    });
  });

  beforeEach(async(() => {
    mockCountriesService.reset();
    mockCountriesService.setup(s => s.countries$(It.isAnyString())).returns(() => of(mockCountries));
    countriesFacade = TestBed.get(CountriesFacade);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  it('should create', () => {
    expect(countriesFacade).toBeTruthy();
  });

  it('should dispatch Load action on loadCountries', () => {
    const region = 'R';
    const action = new countriesAction.Load(region);
    countriesFacade.loadCountries(region);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should emit countries$', (done: DoneFn) => {
    store.dispatch(new countriesAction.Load('R'));
    countriesFacade.countries$.subscribe(c => {
      expect(c).toEqual(mockCountries);
      done();
    });
  });
});
