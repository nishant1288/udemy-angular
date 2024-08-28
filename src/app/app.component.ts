import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstProject';

  name : string = '';

  textVal : string = 'Angular';
  isDisabled : boolean = false;

  display() {
    alert('Hello')
  }
 
}
