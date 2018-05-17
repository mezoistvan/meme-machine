import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Browse2Component } from './browse2.component';

describe('Browse2Component', () => {
  let component: Browse2Component;
  let fixture: ComponentFixture<Browse2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Browse2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Browse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
