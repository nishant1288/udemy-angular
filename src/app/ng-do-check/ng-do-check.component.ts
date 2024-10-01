import { Component, DoCheck, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.css']
})
export class NgDoCheckComponent implements DoCheck {
  @Input() user: any;
  private prevValue : string | undefined;
  
  ngDoCheck(): void {
    if(this.user.name != this.prevValue) // current user name is not equal to previous user name.
    {
      this.prevValue = this.user.name;
      console.log('ng do check', this.user.name)
    }
  }

}
