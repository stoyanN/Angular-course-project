import { Component, OnInit } from '@angular/core';
import { MediaRecord } from '../models/media-record';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  articles: any[] = [];
  isLoaded: boolean = false;


  constructor(private media: MediaService, private service: UserService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.articles = await this.media.getAllRecords('posts');
      this.isLoaded = true;
    } catch {
      console.log("Error during loading!");
    }
  }


  async delete(f: number) {
    try {
      await this.media.deleteRecord('posts', f);
      this.articles = await this.media.getAllRecords('posts');
    } catch {
      console.log("Error during deleting!");
    }
  }
}
