import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  description: string = 'smtg';
  orientation: string = 'landscape';
  title: string = 'i am a title';
  imageURL: string = 'https://www.google.com';
  _id: string = 'user_id';

  constructor() { }

  ngOnInit(): void {
  }

}
