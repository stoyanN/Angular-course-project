import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { from, Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  name: string = 'name';
  isUser!: Backendless.User;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    let test = from(this.service.getUser()).subscribe(x => {
      this.isUser = x;
      
      console.log(x, "this is the observable");
    });
  }

  async user() {
    try {
      this.isUser = await this.service.getUser();
    } catch {
      console.log("Something went wrong with user!");
    }
  }

  logoutUser() {
    Backendless.UserService.logout()
      .then(x => {
        console.log(x);
        this.router.navigate(['login']);
      })
      .catch((err: Error) => console.log(err.message));


  }
}
