import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-toggle-mode',
  templateUrl: './directive-toggle-mode.component.html',
  styleUrls: ['./directive-toggle-mode.component.css']
})
export class DirectiveToggleModeComponent {

  darkMode: boolean = false;

  changeMode() {
    this.darkMode = !this.darkMode;
  }

}
