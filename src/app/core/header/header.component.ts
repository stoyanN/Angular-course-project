import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userName: any;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('email');
  }


  async logout() {
    try {
      await this.service.logoutUser();
      this.router.navigate(['login']);
    } catch {
      console.log("Logout error!");
    }
  }
}
