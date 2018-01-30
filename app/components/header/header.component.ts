import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: 'components/header/header.component.html',
  styleUrls: ['components/header/header.component.css']
})
export class HeaderComponent {
   @Output() menuItem = new EventEmitter<string>();
  selectedElement: string;
  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  menuSelected(item: string) {
    this.menuItem.emit(item);

  }

  aFunction(element: string) {
    this.selectedElement = element;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
