import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  userRecords: any[] = [];
  postsEventHandler = Backendless.Data.of('posts').rt();
  isLoaded: boolean = false;

  constructor(private service: UserService, private media: MediaService) { }

  async ngOnInit(): Promise<void> {
    // this.userRecords = await this.media.getAllRecords("posts");
    this.isLoaded = true;
    console.log('it is loaded')

    from(this.media.getAllRecords("posts")).subscribe(result => this.userRecords = result);

    this.postsEventHandler.addBulkUpdateListener((updatedValue) => {
      console.log(updatedValue);
    }, function error(e) {
      console.log(e.message);
    })
  }

}
