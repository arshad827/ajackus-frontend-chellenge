import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLinkedinComponent } from './sign-up-linkedin.component';

describe('SignUpLinkedinComponent', () => {
  let component: SignUpLinkedinComponent;
  let fixture: ComponentFixture<SignUpLinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpLinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
