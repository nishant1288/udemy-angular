import { AfterContentInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-aftercontentinit',
  templateUrl: './aftercontentinit.component.html',
  styleUrls: ['./aftercontentinit.component.css']
})
export class AftercontentinitComponent implements DoCheck {

  dataFromParent  = ''

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit invokeds')
  // }

  ngDoCheck(): void {
    console.log('ngDocHECK WAS INVOKED..')
  }

  sendDataToChild() {
    let random = Math.floor(Math.random()*10);
    this.dataFromParent = 'Random Number' + ' ' + random
  }

}
