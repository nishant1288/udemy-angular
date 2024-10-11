import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-destroy-child',
  templateUrl: './destroy-child.component.html',
  styleUrls: ['./destroy-child.component.css']
})
export class DestroyChildComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('CHILD COMPONENT - INIT')
  }

  ngOnDestroy(): void {
    console.log('CHILD COMPONENT - DESTROY')
  }

}
