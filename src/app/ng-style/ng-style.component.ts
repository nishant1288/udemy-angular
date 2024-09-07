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

  nm: string = '';
  em: string = '';
  isEmailValid: boolean = false;
  isFormSubmitted: boolean = false;

  checkEmailValidation(email: string): void {
    if (email.includes('@') && email.includes('.com')) {
      this.isEmailValid = true;
    }
    else {
      this.isEmailValid = false;
    }
  }

  onSubmit() {
    if (this.nm && this.isEmailValid) {
      this.isFormSubmitted = true;
    }
    else {
      this.isFormSubmitted = false;
    }
  }

}
