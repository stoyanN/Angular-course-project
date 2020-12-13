import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userName: any;
  user!: Admin;
  isAdmin: boolean = false;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('email');
    this.userCheck();
  }


  async logout() {
    try {
      await this.service.logoutUser();
      this.router.navigate(['login']);
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
