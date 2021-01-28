import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '', component: RegisterComponent
          }
        ]),
        ReactiveFormsModule
      ],
      declarations: [RegisterComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create FormGroup when component is loaded', () => {
    expect(component.form).toBeTruthy();
  });

  it('should change email in the form', () => {
    const elem: HTMLInputElement = fixture.debugElement.query(By.css('#email')).nativeElement;

    elem.value = 'test@example.com';

    // elem.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(elem.value).toBe('test@example.com');
  });

  describe('should test form validity', () => {

    it('should test empty form validity', () => {
      const form = component.form;

      expect(form.valid).toBeFalsy();
    });

    it('should test NOT empty form validity', () => {
      const form = component.form;

      const email = form.controls.email;
      const password = form.controls.password;
      const rePassword = form.controls.rePassword;

      email.setValue('test@example.com');
      password.setValue('123123');
      rePassword.setValue('123123');

      expect(form.valid).toBeTruthy();
    });


    describe('should test email input validity', () => {
      let emailInput: AbstractControl;
      beforeEach(() => emailInput = component.form.controls.email);

      it('should test email input validity with empty data', () => {
        expect(emailInput.valid).toBeFalsy();
      });

      it('should test email input validity with invalid data', () => {
        emailInput.setValue('test.invalid');

        expect(emailInput.valid).toBeFalsy();
      });

      it('should test email input validity with valid data', () => {
        emailInput.setValue('test@example.com');

        expect(emailInput.valid).toBeTruthy();
      });
    });

    describe('should test password input validty', () => {
      let passwordInput: AbstractControl;
      beforeEach(() => passwordInput = component.form.controls.password);

      it('should test password input validity with empty data', () => {
        expect(passwordInput.valid).toBeFalsy();
      });

      it('should test password input validity with invalid data', () => {
        passwordInput.setValue('12');

        expect(passwordInput.valid).toBeFalsy();
      });

      it('should test password input validity with valid data', () => {
        passwordInput.setValue('123123');

        expect(passwordInput.valid).toBeTruthy();
      });
    });

    describe('should test rePassword input validity', () => {
      let rePasswordInput: AbstractControl;
      beforeEach(() => rePasswordInput = component.form.controls.rePassword);

      it('should test rePassword input validity with empty data', () => {
        expect(rePasswordInput.valid).toBeFalsy();
      });

      it('should test rePassword input validity with invalid data', () => {
        rePasswordInput.setValue('12')

        expect(rePasswordInput.valid).toBeFalsy();
      });

      it('should test rePassword input validity with valid data', () => {
        rePasswordInput.setValue('123')

        expect(rePasswordInput.valid).toBeTruthy();
      });
    })
  });

});
