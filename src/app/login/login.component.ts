import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Admin } from '../models/admin';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: Admin;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(f: NgForm) {
    try {
      let { email, password } = f.value;

      if (email && password) {
        this.user = Object.assign(await this.service.loginUser(email, password));

        if (this.user.role === 'admin') {
        this.router.navigate(['admin']);
        } else {
          this.router.navigate(['about']);
        }
      }
    } catch {
      f.resetForm();
      console.log("Login failed!");
    }
  }

}
