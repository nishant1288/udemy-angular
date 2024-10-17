import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() recieveMsg: string = '';
  @Input() recieveCourses: { id: number, name: string }[] = [];

  @Input() itemsArrayFromParent: string[] = [];

  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit('Event emitted from child component');
  }

  @Output() emitIndex = new EventEmitter<number>();

  outputEventForIndexDelete(index: number) {
    this.emitIndex.emit(index)
  }

  ngOnInit(): void {
    console.log('Child Initialised')
  }

  ngOnDestroy(): void {
    console.log('Child Destroyed')
  }
}
