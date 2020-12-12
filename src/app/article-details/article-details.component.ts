import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SinglePost } from '../models/single-post';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit, OnDestroy {
  recData!: SinglePost | any;
  isAuthor: any;
  userId: any;
  recId: any;
  isLiked: boolean = false;
  likes: Array<any> = [];
  postsEventHandler = Backendless.Data.of('posts').rt();


  constructor(private service: UserService, private route: ActivatedRoute, private media: MediaService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    try {
      this.userId = localStorage.getItem('userId');
      this.recId = this.route.snapshot.params.id;
      this.recData = Object.assign(await this.media.getSingleRecord(this.recId, 'posts'));
      this.isAuthor = this.userId === this.recData.ownerId;
      this.likes = JSON.parse(this.recData.likesList);

      if (this.likes.indexOf(this.userId) !== -1) {
        this.isLiked = true;
      }

      this.postsEventHandler.addUpdateListener((updatedValue) => {
        this.recData = Object.assign({}, updatedValue);
        this.likes = JSON.parse(this.recData.likesList);

        if (this.likes.indexOf(this.userId) !== -1) {
          this.isLiked = true;
        } else {
          this.isLiked = false;
        }
      }, function error(e) {
        console.log(e.message);
      })

    } catch {
      this.router.navigate(['articles'])
      console.log("Error occured!");
    }
  }

  ngOnDestroy() {
    this.postsEventHandler.removeUpdateListener((x) => console.log('listener was destroyed'));
  }


  async deleteRec(value: any) {
    try {
      let isSure = window.confirm("Do you really want to delete this record?");

      if (isSure) {
        await this.media.deleteRecord('posts', value);
        this.router.navigate(['articles']);
        console.log(value);
      }

    } catch {
      console.log("Record deleting error!");
    }
  }

  async likesUpdate() {
    try {
      let likesList = JSON.parse(this.recData.likesList);

      if (likesList.indexOf(this.userId) === -1) {
        likesList.push(this.userId);

        this.recData.likesList = JSON.stringify(likesList);

        await this.media.saveRecord(this.recData);
      } else {
        console.log("this post is already liked")
      }

    } catch {
      console.log("Saving record error!");
    }

  }

  async disslikeUpdate() {
    try {
      let likesList = JSON.parse(this.recData.likesList);
      let elemIndex = likesList.indexOf(this.userId);

      if (elemIndex !== -1) {
        likesList.splice(elemIndex, 1);

        this.recData.likesList = JSON.stringify(likesList);

        await this.media.saveRecord(this.recData);
      } else {
        console.log("this post is already dissliked")
      }

    } catch {
      console.log("Saving record error!");
    }
  }
}