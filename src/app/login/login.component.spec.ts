import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    setupTestBed();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function setupTestBed(): void {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });

    initializeComponentAndFixture();
  }

  function initializeComponentAndFixture(): void {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
});
