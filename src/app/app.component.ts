import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstProject';

  inputValue : string ='hello';

  inputPropValue : string = 'input value';

  update() {
    this.inputPropValue = 'input value 2'
  }
  
}
