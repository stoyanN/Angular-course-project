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

  login(f: NgForm) {
    let { email, password } = f.value;

    if (email && password) {
      this.service.loginUser(email, password).then(() => this.router.navigate(['about']));
      // this.router.navigate(['/about']);
    }
  }

  async isValid() {
    try {
      let user = await this.service.getUser();

      console.log(user);
    } catch {
      throwError('Couldn get user properly!');
    }

  }

}
