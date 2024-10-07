import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentcheckedComponent } from './aftercontentchecked.component';

describe('AftercontentcheckedComponent', () => {
  let component: AftercontentcheckedComponent;
  let fixture: ComponentFixture<AftercontentcheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftercontentcheckedComponent]
    });
    fixture = TestBed.createComponent(AftercontentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
