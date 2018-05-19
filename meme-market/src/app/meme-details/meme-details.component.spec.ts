import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeDetailsComponent } from './meme-details.component';

describe('MemeDetailsComponent', () => {
  let component: MemeDetailsComponent;
  let fixture: ComponentFixture<MemeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
