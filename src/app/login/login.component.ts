import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user!: Admin;
  constructor(private service: UserService, private router: Router) { }


  async login(form: NgForm) {
    try {
      let { email, password } = form.value;

      if (email && password) {
        this.user = Object.assign(await this.service.loginUser(email, password));

        if (this.user.role === 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['about']);
        }
      }
    } catch {
      form.resetForm();
      console.log("Login failed!");
    }
  }

}
