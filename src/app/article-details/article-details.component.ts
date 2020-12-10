import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SinglePost } from '../models/single-post';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {
  recData!: SinglePost;
  isAuthor: any;
  userId: any;
  recId: any;


  constructor(private service: UserService, private route: ActivatedRoute, private media: MediaService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.userId = localStorage.getItem('userId');
    this.recId = this.route.snapshot.params.id;
    this.recData = Object.assign(await this.media.getSingleRecord(this.recId, 'posts'));
    this.isAuthor = this.userId === this.recData.ownerId;
  }


  async deleteRec(value: any) {
    try {
      await this.media.deleteRecord('posts', value);
      this.router.navigate(['articles']);
      console.log(value);
    } catch {
      console.log("Record deleting error!");
    }
  }
}
