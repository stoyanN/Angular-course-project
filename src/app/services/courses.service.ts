import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  constructor(private db: AngularFireDatabase) { }

  getUsers() {
    return this.db.list('/users');
  }
}
