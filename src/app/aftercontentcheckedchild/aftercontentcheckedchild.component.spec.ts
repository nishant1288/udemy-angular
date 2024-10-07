import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentcheckedchildComponent } from './aftercontentcheckedchild.component';

describe('AftercontentcheckedchildComponent', () => {
  let component: AftercontentcheckedchildComponent;
  let fixture: ComponentFixture<AftercontentcheckedchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftercontentcheckedchildComponent]
    });
    fixture = TestBed.createComponent(AftercontentcheckedchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
