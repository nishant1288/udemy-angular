import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() recieveMsg: string = '';
  @Input() recieveCourses: { id: number, name: string }[] = [];

  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit('Event emitted from child component');
  }

}
