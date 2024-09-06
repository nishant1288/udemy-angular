import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  color = 'red';
  fontWeight = '700';
  fontSize = '24px'

  applyValue = {
    color: 'orange',
    fontWeight: '400',
    fontSize: '28px'
  }

}
