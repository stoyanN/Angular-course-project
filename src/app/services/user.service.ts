import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  updateUserData(data: any) {
    return Backendless.Data.of("Users").save(data);
  }

  getUser() {
    return Backendless.UserService.getCurrentUser()
  }

  logoutUser() {
    localStorage.clear();
    return Backendless.UserService.logout();
  }

  loginUser(email: string, password: string) {
    return Backendless.UserService.login(email, password, true)
      .then(x => {
        localStorage.setItem('userId', `${x.objectId}`)
        localStorage.setItem('email', `${x.email}`)
      })
      .catch((err: Error) => {
        alert(err.message);
        throw new Error(err.message);
      });
  }

  registerUser(email: string, password: string) {
    let user = new Backendless.User();
    user.email = email;
    user.password = password;

    return Backendless.UserService.register(user);
  }


}
