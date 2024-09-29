import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnChanges{

  @Input() inputValue : string = '';

  @Input() inputPropValue : string = '';
  prevValue : string | undefined;
  currValue : string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputPropValue'])
    {
      this.prevValue = changes['inputPropValue'].previousValue;
      this.currValue = changes['inputPropValue'].currentValue;
      console.log('Previous Value', this.prevValue);
      console.log('Current Value', this.currValue);
      console.log('Changes Parameter', changes)
    }
    console.log(changes);
  }

}
