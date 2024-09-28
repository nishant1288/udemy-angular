import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnChanges{

  @Input() inputValue : string = ''

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered');
    console.log(changes);
  }

}
