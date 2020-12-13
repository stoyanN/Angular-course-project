import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  articles: any[] = [];
  isLoaded: boolean = false;
  userId!: string | null;

  constructor(private media: MediaService, private service: UserService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.userId = localStorage.getItem('userId');
      this.articles = await this.media.userRecords(`${this.userId}`, 'posts');
      this.isLoaded = true;
    } catch {
      console.log("Error during loading!");
    }
  }


  async delete(f: number) {
    try {
      await this.media.deleteRecord('posts', f);
      this.articles = await this.media.userRecords(`${this.userId}`, 'posts');
    } catch {
      console.log("Error during deleting!");
    }
  }
}
