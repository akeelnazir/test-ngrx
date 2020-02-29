import { Component, OnInit } from '@angular/core';

interface Region {
  code: string;
  name: string;
}

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [
    {code: 'r-0', name: 'Asia'},
    {code: 'r-1', name: 'Europe'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
