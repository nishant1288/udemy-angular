import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aftercontentcheckedchild',
  templateUrl: './aftercontentcheckedchild.component.html',
  styleUrls: ['./aftercontentcheckedchild.component.css']
})
export class AftercontentcheckedchildComponent implements AfterContentInit, AfterContentChecked {
  @ViewChild('childwrapper') wrapper! : ElementRef;
  @ContentChild('wrapperinparentchild') content! : ElementRef;

  ngAfterContentInit(): void {
    console.log('ngaftercontentinit invoked');
    console.log('ngaftercontentinit child', this.wrapper);
    console.log('ngaftercntetninit parent', this.content)
  }

  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked was invoked')
  }
}
