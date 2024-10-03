import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myfirstProject';

  inputValue: string = 'hello';

  inputPropValue: string = 'input value';

  update() {
    this.inputPropValue = 'input value 2'
  }

  counte: number = 0;

  user = {
    name : 'Nishant'
  }

  upDateUser() {
    this.user.name = 'Rao';
  }

  ngOnInit(): void {
    // this.updateCounter();
  }

  updateCounter() {
    setInterval(() => {
      if (this.counte < 5) {
        this.counte++;
        console.log(this.counte);
      }
    }, 1000);
  }

}
