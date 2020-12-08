import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  imgFile: string = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  registerPhoto(event: any) {
    this.imgFile = event.target.files[0];
    console.log(event.target.files[0], 'registerPhoto');


  }

  async createStory(f: any) {
    try {
      const userId = await (await this.service.getUser()).objectId;
      const formData = new FormData();

      formData.append("file", this.imgFile);
      formData.append("upload_preset", "jvmpdbhl");
      formData.append("folder", userId ? `${userId}` : 'random');

      const uploadedData = await fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
        method: "POST",
        body: formData
      }).then(response => response.json());


      Backendless.Data.of("posts").save({ imageUrl: uploadedData.url })
        .then(returnValue => console.log(returnValue))
        .catch(function (error) {
        });
    } catch {
      console.log("Something went wrong with creating the story!");
    }




    // fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
    //   method: "POST",
    //   body: formData
    // })
    //   .then((response) => {
    //     console.log(response);
    //     return response.text();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch((err: Error) => {
    //     console.log(err);
    //   });
  }

  findRecords() {
    let whereClause = "ownerId = '817A69D3-1A4B-4B97-A1C7-379B59ECDAA1'";
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);


    Backendless.Data.of("posts").find(queryBuilder)
      .then(records => console.log(records))
      .catch(function (error) {
      });
  }

}
