import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

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

  message: string = '';

  recieveChildEvent(eventData: string) {
    this.message = eventData
  }


  itemsArr = ['item1', 'item2'];

  addItems() {
    const item = `item${this.itemsArr.length + 1}`;
    this.itemsArr.push(item);
  }

  deleteItems(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1)
    }
  }

  ngOnInit(): void {
    console.log('Parent Initialised')
  }
}
