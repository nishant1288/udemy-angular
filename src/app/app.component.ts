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
  
}
