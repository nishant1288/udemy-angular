import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  displayMsg: string = 'I am coming from Parent component';
  // 
  courses: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'Javascript'
    },
    {
      id: 2,
      name: 'Angular'
    },
    {
      id: 3,
      name: 'React'
    }
  ]

}
