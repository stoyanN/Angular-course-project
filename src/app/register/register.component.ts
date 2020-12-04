import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => console.log(user?.toJSON(), 'console was called'));

  }

  submitForm(f: any) {
    let { username, password, repassword } = f.value;

    if (password === repassword) {
      this.auth.createUserWithEmailAndPassword(username, password).then(a => console.log(a)).catch(err => throwError(err));
    }
    console.log(f);
    console.log('the form was submitted!', username, password, repassword);
  }

}
