import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Backendless from 'backendless';
import { logInUser, logOutUser } from '../user-profile/user-state.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<{ logging: boolean }>) { } 

  updateUserData(data: any) {
    return Backendless.Data.of("Users").save(data);
  }

  getUser() {
    return Backendless.UserService.getCurrentUser();
  }

  logoutUser() {
    localStorage.clear();
    this.store.dispatch(logOutUser());
    return Backendless.UserService.logout();
  }

  loginUser(email: string, password: string) {
    return Backendless.UserService.login(email, password, true)
      .then(x => {
        localStorage.setItem('userId', `${x.objectId}`);
        localStorage.setItem('email', `${x.email}`);
        this.store.dispatch(logInUser());

        return x;
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
