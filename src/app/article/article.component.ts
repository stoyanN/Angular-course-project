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
  isLoaded: boolean = false;

  constructor(private service: UserService, private media: MediaService) { }

  async ngOnInit(): Promise<void> {
    this.isLoaded = true;

    from(this.media.getAllRecords("posts")).subscribe(result => this.userRecords = result);
  }

}
