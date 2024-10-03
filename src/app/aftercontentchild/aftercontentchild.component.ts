import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-aftercontentchild',
  templateUrl: './aftercontentchild.component.html',
  styleUrls: ['./aftercontentchild.component.css']
})
export class AftercontentchildComponent implements DoCheck {

  ngDoCheck() {
    console.log('do check was invoked')
  }

}
