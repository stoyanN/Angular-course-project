import { Component, OnInit, Input, NgZone } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})


export class TestComponentComponent implements OnInit {
  imgFile: string = '';
  userId: string = '';
  profileUrl: any;
  imageUrl: string = '';

  ref: AngularFireStorageReference | undefined;
  task: AngularFireUploadTask | undefined;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() { }

  registerPhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imgFile = event.target.files[0];
    }
  }

  uploadPhoto() {
    this.afStorage.upload('/cool/2', this.imgFile).snapshotChanges().subscribe(msg => console.log(msg));
    // const id = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(id);
    // this.task = this.ref.put(this.imgFile);


    // console.log(this.imgFile);

    // cloudinary.v2.config({
    //   cloud_name: 'dronicn8f',
    //   api_key: '356946499389618',
    //   api_secret: 'PHILA9K2a0RLQlaYT0TFI3jRX-Q'
    // });

    // cloudinary.v2.uploader.upload(this.imgFile)
    //   .then((response) => {
    //     console.log(response);
    //     // return response.text();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // const formData = new FormData();

    // formData.append("file", this.imgFile);
    // formData.append("upload_preset", "jvmpdbhl");
    // formData.append("folder", this.userId);


    // fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
    //   method: "POST",
    //   body: formData
    // })
    // .then((response) => {
    //   console.log(response);
    //   return response.text();
    // })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch((err: Error) => {
    //   console.log(err);
    // });

    // cloud.v2.uploader.unsigned_upload(this.imgFile, 'jvmpdbhl').then((response) => {
    //   console.log(response);
    //   return response.text();
    // })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch((err: Error) => {
    //   console.log(err);
    // });

  }

  deletePic(pic: HTMLInputElement) {
    //  https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<CLOUD_NAME>/resources/image

    // https://res.cloudinary.com/dronicn8f/image/upload/v1607171606/whylkrepkdhiel1kclgj.jpg

    // console.log(pic.value);

    const ref = this.afStorage.ref('cool/').getDownloadURL().subscribe(x => console.log(x));
    // this.profileUrl = ref.getDownloadURL();

    
    // fetch(pic.value, {
    //   method: "DELETE",
    //   headers: {
    //     api_key: '356946499389618',
    //     api_secret: 'PHILA9K2a0RLQlaYT0TFI3jRX-Q'
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch((err: Error) => {
    //     console.log(err);
    //   });


  }


}
