import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../regions/state/model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label: string;
  @Input() items;
  @Output() selectionChanged = new EventEmitter<Region>();

  constructor() {}
}
