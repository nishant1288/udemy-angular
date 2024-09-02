import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  display: boolean = true;
  num: number = 0;
  displayMsg: boolean = true;
  age: number = 25;
  ageVal: number = 0;
  isEligible: boolean = false;
  onBtnClick() {
    this.displayMsg = !this.displayMsg;
  }

  showStack: boolean = false;
  showStackFunc() {
    this.showStack = !this.showStack;
  }

  frontEnd = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'React'
    }
  ]

  checkEligibility() {
    // if (this.ageVal >= 18) {
    //   this.isEligible = true;
    // }
    // else {
    //   this.isEligible = false
    // }

    this.isEligible = this.ageVal >= 18;
  }

  // -------------------------------> Attribute Directives <-------------------------------

  // updateStyles = 'updateStyles'
}
