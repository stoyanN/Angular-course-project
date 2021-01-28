import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, private service: UserService) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void { }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rePassword: new FormControl('', [Validators.required, Validators.minLength(3)])
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
        let { email, password } = this.form.value;

        await this.service.registerUser(email, password);
        await this.service.loginUser(email, password);
        await this.router.navigate(['/about']);
      }
    } catch {
      console.log('Registration error!');
    }
  }

}
