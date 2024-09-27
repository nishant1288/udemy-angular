import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleComponent } from './component-lifecycle.component';

describe('ComponentLifecycleComponent', () => {
  let component: ComponentLifecycleComponent;
  let fixture: ComponentFixture<ComponentLifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentLifecycleComponent]
    });
    fixture = TestBed.createComponent(ComponentLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
