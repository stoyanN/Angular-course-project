import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get('http://localhost:3000/api/posts').subscribe(user => console.log(user));
  }
}
