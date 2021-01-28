import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Admin } from 'src/app/models/admin';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { logOutUser } from 'src/app/user-profile/user-state.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userName: string | null = '';
  user!: Admin;
  isAdmin: boolean = false;

  userSubscription!: Subscription;

  isUserLogged$!: Observable<boolean>;

  constructor(private service: UserService, private router: Router, private store: Store<{ logging: boolean }>) {
    this.isUserLogged$ = this.store.select('logging');
  }

  ngOnInit(): void {
    this.userSubscription = this.isUserLogged$.subscribe(() => this.userName = localStorage.getItem('email'));
    // this.userCheck();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async logout() {
    try {
      this.router.navigate(['home']);
      await this.service.logoutUser();
      // this.store.dispatch(logOutUser());
    } catch {
      console.log("Logout error!");
    }
  }

  async userCheck() {
    try {
      this.user = Object.assign(await this.service.getUser());

      if (this.user && (this.user.role === "admin")) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } catch {
      console.log("Admin localisation error!");
    }
  }
}
