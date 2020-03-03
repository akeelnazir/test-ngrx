import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { It, Mock } from 'typemoq';
import { Observable, of } from 'rxjs';

import { configureTestSuite } from 'ng-bullet';
import { CountryEffects } from './effects';
import { CountriesService } from './service';
import { Country } from './model';
import { Load, LoadSuccess } from './actions';
import { cold, hot } from 'jasmine-marbles';

describe('CountryEffects', () => {
  const mockCountries: Country[] = [
    { name: 'A', numericCode: 1 },
    { name: 'B', numericCode: 2 }
  ] as Country[];
  const mockCountriesService = Mock.ofType<CountriesService>();

  let countryEffects: CountryEffects;
  let actions: Observable<any>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CountryEffects,
        provideMockActions(() => actions),
        { provide: CountriesService, useFactory: () => mockCountriesService.object }
      ]
    });
  });

  beforeEach(() => {
    mockCountriesService.reset();
    mockCountriesService.setup(s => s.countries$(It.isAnyString())).returns(() => of(mockCountries));
    countryEffects = TestBed.get(CountryEffects);
  });

  describe('getCountries$', () => {
    it('should return an a list of countries', () => {
      const loadCountriesAction = new Load('A');
      const outcomeAction = new LoadSuccess(mockCountries);

      actions = hot('--a-', { a: loadCountriesAction});
      const expected = cold('--b', { b: outcomeAction});

      expect(countryEffects.getCountries$).toBeObservable(expected);
    });
  });
});

