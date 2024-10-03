import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-aftercontentinit',
  templateUrl: './aftercontentinit.component.html',
  styleUrls: ['./aftercontentinit.component.css']
})
export class AftercontentinitComponent implements AfterContentInit {

  dataFromParent  = ''

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit invokeds')
  }

  sendDataToChild() {
    let random = Math.floor(Math.random()*10);
    this.dataFromParent = 'Random Number' + ' ' + random
  }

}
