import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveToggleModeComponent } from './directive-toggle-mode.component';

describe('DirectiveToggleModeComponent', () => {
  let component: DirectiveToggleModeComponent;
  let fixture: ComponentFixture<DirectiveToggleModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveToggleModeComponent]
    });
    fixture = TestBed.createComponent(DirectiveToggleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
