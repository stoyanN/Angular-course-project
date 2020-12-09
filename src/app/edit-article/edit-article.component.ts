import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
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
  recId: any;
  
  recordTest!: SinglePost;

  constructor(private route: ActivatedRoute, private media: MediaService, private router: Router) { }


  async ngOnInit(): Promise<void> {
    try {
      this.recId = this.route.snapshot.params.id;
      this.recordTest = Object.assign(await this.media.getSingleRecord(`${this.recId}`, 'posts'));

      console.log(this.recordTest);
    } catch {
      console.log("Problem getting record!");
    }
  }

  registerPhoto(event: any) {
    this.imgFile = event.target.files[0];
  }

  // async getRecord(recordId: any) {
  //   try {
  //     let testRecord = 

  //     console.log(testRecord);
  //     return testRecord;
  //   } catch {
  //     return throwError;
  //   }
  // }

  editStory(f: any) {
    console.log(f);
  }

}
