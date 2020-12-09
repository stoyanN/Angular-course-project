import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // userId: string | null = '';
  userRecords: any[] = [];

  constructor(private service: UserService, private media: MediaService) { }

  ngOnInit(): void {
    // this.userId = localStorage.getItem('userId');
    // this.media.getAllRecords("posts").then(x => {
    //   this.userRecords = x;
    //   console.log(this.userRecords);
    // })
    //   .catch((err: Error) => console.log(err.message));
    this.records();
  }



  async records() {
    this.userRecords = await this.media.getAllRecords("posts");

    console.log(this.userRecords);
  }

}
