import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  orientation: string = 'Vertical';
  imageURL: string = 'https://smtg';
  title: string = 'i am a title';
  objectId: string = 'radnom id';

  
  constructor() { }

  ngOnInit(): void {
  }

}
