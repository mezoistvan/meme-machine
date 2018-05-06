import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractBoxComponent } from './abstract-box.component';

describe('AbstractBoxComponent', () => {
  let component: AbstractBoxComponent;
  let fixture: ComponentFixture<AbstractBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
