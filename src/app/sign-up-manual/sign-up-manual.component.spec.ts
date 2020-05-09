import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpManualComponent } from './sign-up-manual.component';

describe('SignUpManualComponent', () => {
  let component: SignUpManualComponent;
  let fixture: ComponentFixture<SignUpManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
