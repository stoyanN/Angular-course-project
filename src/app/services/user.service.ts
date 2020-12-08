import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return Backendless.UserService.getCurrentUser()
  }

  loginUser(email: string, password: string) {
    return Backendless.UserService.login(email, password, true)
      .then(x => console.log(x))
      .catch((err: Error) => console.log(err.message));
  }

  registerUser(email: string, password: string) {
    let user = new Backendless.User();
    user.email = email;
    user.password = password;

    Backendless.UserService.register(user)
      .then(x => {
        console.log(x);
        console.log("Successful registration!");
      })
      .catch((err: Error) => {
        console.log(`Something went wrong: ${err.message}`);
      });
  }


}
