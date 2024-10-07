import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-aftercontentchecked',
  templateUrl: './aftercontentchecked.component.html',
  styleUrls: ['./aftercontentchecked.component.css']
})
export class AftercontentcheckedComponent implements DoCheck{

  data: number = 0;
  sendData() {
    this.data = Math.floor(Math.random() * 10)
  }

  ngDoCheck(): void {
    console.log('ngdocheck invoked')
  }

}
