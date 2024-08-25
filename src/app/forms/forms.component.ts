import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  firstNum: number = 0;
  secondNum: number = 0;
  answer: number | undefined;
  add() {
    this.answer = this.firstNum + this.secondNum
  }
}
