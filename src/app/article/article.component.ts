import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
  userRecords: any[] = [];
  isLoaded: boolean = false;
  recordSubscription!: Subscription;

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.recordSubscription = this.media.getAllRecords("posts")
      .subscribe(result => {
        this.userRecords = result
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    this.recordSubscription.unsubscribe();
  }

}
