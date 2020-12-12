import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  imgFile: string = '';
  isInvalid: boolean = false;
  record: any;

  constructor(private service: UserService, private media: MediaService, private router: Router) { }

  ngOnInit(): void {
  }

  registerPhoto(event: any) {
    this.imgFile = event.target.files[0];
  }



  async createStory(f: any) {
    if (f.valid) {
      try {
        const imageData = await this.media.uploadImage(this.imgFile);
        let { orientation, title, description } = f.value;


        await this.media.saveRecord({
          imageUrl: imageData.url,
          orientation: orientation,
          title: title,
          description: description,
          likesList: JSON.stringify([]) // DO NOT FORGET TO FIX THIS ISSUE
        });

        this.isInvalid = false;
        this.router.navigate(['articles']);
      } catch {
        alert("Something went wrong with creating the story!");
        console.log("Something went wrong with creating the story!");
      }
    } else {
      this.isInvalid = true;
    }
  }

}
