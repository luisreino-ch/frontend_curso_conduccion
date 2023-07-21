import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationList1Component } from './registration-list1.component';

describe('RegistrationList1Component', () => {
  let component: RegistrationList1Component;
  let fixture: ComponentFixture<RegistrationList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationList1Component]
    });
    fixture = TestBed.createComponent(RegistrationList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
