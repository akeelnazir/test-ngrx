import { Component, OnInit } from '@angular/core';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [
    {code: 'c-0', name: 'Turkey'},
    {code: 'c-1', name: 'UK'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
