import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentchildComponent } from './aftercontentchild.component';

describe('AftercontentchildComponent', () => {
  let component: AftercontentchildComponent;
  let fixture: ComponentFixture<AftercontentchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftercontentchildComponent]
    });
    fixture = TestBed.createComponent(AftercontentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
