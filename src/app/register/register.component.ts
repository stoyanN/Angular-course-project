import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: UserService) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rePassword: new FormControl('', [Validators.required])
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get rePassword() {
    return this.form.get('rePassword');
  }

  async register() {
    try {

      if (this.form.valid) {
        let { email, password, rePassword } = this.form.value;

        await this.service.registerUser(email, password);
        await this.service.loginUser(email, password);
        await this.router.navigate(['/about']);
      } else {
        console.log("ha ha is invalid")
      }
    } catch {
      console.log('Registration error!');
    }
  }

}
