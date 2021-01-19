import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  imgFile: string = '';
  isInvalid: boolean = false;

  constructor(private media: MediaService, private router: Router) { }

  ngOnInit(): void {
  }

  registerPhoto(event: any) {
    this.imgFile = event.target.files[0];
  }

  async createStory(form: NgForm) {

    if (form.valid) {
      try {
        const imageData = await this.media.uploadImage(this.imgFile);
        let { orientation, title, description } = form.value;

        await this.media.saveRecord({
          imageUrl: imageData,
          orientation: orientation,
          title: title,
          description: description,
          likesList: JSON.stringify([])
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
