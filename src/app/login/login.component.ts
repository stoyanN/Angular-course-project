import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(f: NgForm) {
    try {
      let { email, password } = f.value;

      if (email && password) {
        await this.service.loginUser(email, password);
        this.router.navigate(['about']);
      }
    } catch {
      f.resetForm();
      console.log("Login failed!");
    }
  }

}
