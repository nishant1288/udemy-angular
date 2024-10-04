import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aftercontentchild',
  templateUrl: './aftercontentchild.component.html',
  styleUrls: ['./aftercontentchild.component.css']
})
export class AftercontentchildComponent implements AfterContentInit {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  ngAfterContentInit(): void {
    console.log("ngAfterContenetInit was invoked...")
    console.log("ngaftercontentinit wrapper", this.wrapper);
    console.log('ngaftercontentinit', this.content)
  }

}
