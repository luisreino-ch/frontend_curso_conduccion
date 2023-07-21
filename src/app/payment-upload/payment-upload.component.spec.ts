import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUploadComponent } from './payment-upload.component';

describe('PaymentUploadComponent', () => {
  let component: PaymentUploadComponent;
  let fixture: ComponentFixture<PaymentUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentUploadComponent]
    });
    fixture = TestBed.createComponent(PaymentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
