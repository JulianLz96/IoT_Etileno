import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTimeComponent } from './live-time.component';

describe('LiveTimeComponent', () => {
  let component: LiveTimeComponent;
  let fixture: ComponentFixture<LiveTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
