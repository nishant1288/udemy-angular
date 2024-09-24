import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent {
  show: boolean = false;

  a: number = 10;
  b: number = 20;

  calc() {
    return this.a + this.b;
  }

  showPersonDetail = {
    name : 'Nishant',
    age : 24,
    location : 'Dombivli'
  }

  employee = [
    { id : 1, name : 'Nishant' },
    { id : 2, name : 'Veer' },
    { id : 3, name : 'Rao' }
  ]

}
