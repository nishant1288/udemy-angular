import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyChildComponent } from './destroy-child.component';

describe('DestroyChildComponent', () => {
  let component: DestroyChildComponent;
  let fixture: ComponentFixture<DestroyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestroyChildComponent]
    });
    fixture = TestBed.createComponent(DestroyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
