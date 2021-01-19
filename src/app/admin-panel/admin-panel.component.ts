import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  articles: any[] = [];
  isLoaded: boolean = false;
  recordsSubscription!: Subscription;


  constructor(private media: MediaService) { }

  ngOnInit() {
    this.recordsSubscription = this.media.getAllRecords('posts')
      .subscribe(list => {
        this.articles = list;
        this.isLoaded = true;
      })
  }

  ngOnDestroy() {
    this.recordsSubscription.unsubscribe();
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
}

