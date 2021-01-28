import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SinglePost } from '../models/single-post';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {
  imgFile: string = '';
  isInvalid: boolean = false;
  recId: string = '';
  article!: SinglePost;
  editFormGroup!: FormGroup;
  articleSubscription!: Subscription;
  isEditing: Boolean = false;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private media: MediaService, private router: Router
  ) { }


  ngOnInit() {
    this.recId = this.route.snapshot.params.id;
    this.articleSubscription = this.media.getSingleRecord(this.recId, 'posts')
      .subscribe(
        (record: object) => {
          this.article = Object.assign(record);
          this.editFormGroup = this.fb.group(this.article);
        },
        (err: Error) => {
          alert('Something went wrong while getting record');

          console.log(err.message);
        })
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  registerPhoto(event: any) {
    this.imgFile = event.target.files[0];
  }

  createFormGroup() {
    return new FormGroup({
      description: new FormControl(),
      imageUrl: new FormControl(),
      objectId: new FormControl(),
      orientation: new FormControl(),
      title: new FormControl(),
    });
  }

  async editStory() {
    try {
      let shallowCopy = Object.assign({}, this.editFormGroup.value);
      this.isEditing = true;

      if (this.imgFile) {
        const imageData = await this.media.uploadImage(this.imgFile);

        shallowCopy.imageUrl = imageData;
      }

      await this.media.saveRecord(shallowCopy);
      this.isEditing = false;
      this.router.navigate(['articles', this.recId]);
    } catch {
      console.log("Record updating error!");
    }
  }

}
