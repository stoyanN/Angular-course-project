import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  recordsSubscription!: Subscription;

  articles: any[] = [];
  isLoaded: boolean = false;
  userId!: string | null;


  constructor(private media: MediaService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.recordsSubscription = this.media.userRecords(`${this.userId}`, 'posts')
      .subscribe(list => {
        this.articles = list
        this.isLoaded = true;
      });
  }

  delete(id: string) {
    let elem = document.getElementById(id);
    let parentElement = elem?.parentElement;

    if (elem) {
      parentElement?.removeChild(elem);
    }

    this.media.deleteRecord('posts', id).subscribe(

      (() => this.recordsSubscription.add()),

      ((err: Error) => {
        if (elem) {
          parentElement?.appendChild(elem);
        }
        console.log(err.message);
      })

    ).unsubscribe();

  }

  ngOnDestroy(): void {
    this.recordsSubscription.unsubscribe();
  }
}
