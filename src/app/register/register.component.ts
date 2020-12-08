import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  register(f: NgForm) {
    let { email, password, rePassword } = f.value;

    if (email && (password === rePassword)) {
        this.service.registerUser(email, password);
        this.service.loginUser(email, password);
        this.router.navigate(['/about']);
      // let user = new Backendless.User();
      // user.email = email;
      // user.password = password;

      // Backendless.UserService.register(user)
      //   .then(x => {
      //     console.log(x);
      //     console.log("Successful registration!");
      //     this.router.navigate(['/about'])
      //   })
      //   .catch((err: Error) => {
      //     console.log(`Something went wrong: ${err.message}`);
      //   });
    }


  }

}
