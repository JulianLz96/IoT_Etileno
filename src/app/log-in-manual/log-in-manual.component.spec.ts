import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInManualComponent } from './log-in-manual.component';

describe('LogInManualComponent', () => {
  let component: LogInManualComponent;
  let fixture: ComponentFixture<LogInManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
