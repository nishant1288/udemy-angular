import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  display: boolean = true;
  num: number = 0;
  displayMsg : boolean = true;

  onBtnClick() {
    this.displayMsg = !this.displayMsg;
  }
}
