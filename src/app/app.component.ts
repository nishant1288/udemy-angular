import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstProject';

  name: string = '';

  textVal: string = 'Angular';
  isDisabled: boolean = false;

  inputValue: string = '';
  dynamicInputValue: string = ''

  counter: number = 0;

  countValue: number = 0;

  display() {
    // alert('Hello')
  }

  onKeyDown() {
    // alert('On key down')
  }

  onSelect() {
    // alert('Selected')
  }

  onCut() {
    // alert('Cut event')
  }

  onInputClick(e: any) {
    console.log(e.target.value)
  }

  keyevent() {
    console.log('Shift + Y is pressed');
  }

  secondKeyEvent(event: any) {
    if (event.shiftKey && event.key === 'Y') {
      console.log('Shift + Y is pressed', event);
    }
  }

  OnSubmitBtn() {
    console.log(this.inputValue);
    this.dynamicInputValue = this.inputValue
  }

  add() {
    this.counter++;
  }

  subtract() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }


  counterFunc(type: string) {
    if (type === 'incr') {
      this.countValue++;
    }
    else if (type === 'decr') {
      this.countValue--;
    }
    else {
      this.countValue = 0;
    }
  }
}
