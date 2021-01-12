import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SinglePost } from '../models/single-post';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  imgFile: string = '';
  isInvalid: boolean = false;
  recId: string = '';
  recordTest!: SinglePost;
  editFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private media: MediaService, private router: Router) {
  }


  async ngOnInit(): Promise<void> {
    try {
      this.recId = this.route.snapshot.params.id;
      this.recordTest = Object.assign(await this.media.getSingleRecord(this.recId, 'posts'));
      this.editFormGroup = this.fb.group(this.recordTest);

    } catch {
      console.log("Problem getting record!");
    }
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


      if (this.imgFile) {
        const imageData = await this.media.uploadImage(this.imgFile);

        shallowCopy.imageUrl = imageData;
      }

      await this.media.saveRecord(shallowCopy);

      this.router.navigate(['articles', this.recId]);
    } catch {
      console.log("Record updating error!");
    }
  }

}
