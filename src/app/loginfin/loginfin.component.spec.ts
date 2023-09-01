import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfinComponent } from './loginfin.component';

describe('LoginfinComponent', () => {
  let component: LoginfinComponent;
  let fixture: ComponentFixture<LoginfinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginfinComponent]
    });
    fixture = TestBed.createComponent(LoginfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
