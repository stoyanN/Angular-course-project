import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  path: any;
  users: any[] = [];
  singleUser: any;
  
  constructor(private af: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => console.log(user?.toJSON()));
    this.singleUser = this.af.doc('users/MDDdiExZDSAS18JPptv7').valueChanges();
    // .valueChanges().subscribe((userList) => console.log(userList));
  }

  uploadFile(event: any) {
    this.path = event.target.files[0];
  }

  submitForm(f: any) {
    // this.af.collection('users').add(f.value).then(a => console.log(a));
    // this.af.collection('users').valueChanges().subscribe((userList) => this.users = userList);

    console.log(`${f.value} was added!`);
  }

}
