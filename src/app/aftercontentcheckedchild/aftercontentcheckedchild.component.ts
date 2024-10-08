import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aftercontentcheckedchild',
  templateUrl: './aftercontentcheckedchild.component.html',
  styleUrls: ['./aftercontentcheckedchild.component.css']
})
export class AftercontentcheckedchildComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {
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

  ngAfterViewInit(): void {
    const divElement : HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'goldenrod';
    divElement.style.fontSize = '18px'
    console.log('ngAfterViwInit hook invokded')
  }
}
