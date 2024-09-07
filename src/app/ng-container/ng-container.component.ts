import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {

  subjects = [
    {
      scode: 1,
      sname: 'Javascript'
    },
    {
      // scode: 2,
      sname: 'Node'
    },
    {
      scode: 3,
      sname: 'Angular'
    }
  ]

}
