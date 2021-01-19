import { Injectable } from '@angular/core';
import Backendless from 'backendless';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  async uploadImage(imgFile: string) {
    try {
      const formData = new FormData();

      formData.append("file", imgFile);
      formData.append("upload_preset", "jvmpdbhl");

      const { secure_url } = await fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
        method: "POST",
        body: formData
      }).then(response => response.json());


      return secure_url;
    } catch {
      console.log("There was an error!");
    }

  }

  deleteRecord(collection: string, recordId: string) {
    return from(Backendless.Data.of(collection).remove({ objectId: recordId }));
  }

  saveRecord(data: any) {
    return Backendless.Data.of("posts").save(data);
  }

  userRecords(userId: string, collection: string) {
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`ownerId = '${userId}'`);
    // let result = from(Backendless.Data.of(collection).find(queryBuilder));
    return from(Backendless.Data.of(collection).find(queryBuilder));
    // return Backendless.Data.of(collection).find(queryBuilder);
  }

  getAllRecords(collection: string) {
    return from(Backendless.Data.of(collection).find());
  }

  getSingleRecord(objectId: string, collection: string) {
    return from(Backendless.Data.of(collection).findById(objectId));
  }
}
