import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-destroy',
  templateUrl: './ng-destroy.component.html',
  styleUrls: ['./ng-destroy.component.css']
})
export class NgDestroyComponent implements OnInit{

  displayComponent: boolean = true;

  toggle() {
    this.displayComponent = !this.displayComponent;
  }

  ngOnInit(): void {
    console.log('PARENT COMPONENT - INIT')
  }
}
