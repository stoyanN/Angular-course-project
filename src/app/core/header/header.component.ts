import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from './user-interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = 'name';
  isAuth: boolean = false;
  user: any;


  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.authState
      .subscribe(x => {
        x ? (this.isAuth = true, this.user = x.toJSON(), console.log(x.toJSON())) : this.isAuth = false;
      });
  }

  logoutUser(event: any) {
    this.auth.signOut();
    console.log('User was logged out!');
  }

}
