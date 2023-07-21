import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationList2Component } from './registration-list2.component';

describe('RegistrationList2Component', () => {
  let component: RegistrationList2Component;
  let fixture: ComponentFixture<RegistrationList2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationList2Component]
    });
    fixture = TestBed.createComponent(RegistrationList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
