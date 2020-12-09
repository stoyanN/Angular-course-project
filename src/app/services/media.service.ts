import { Injectable } from '@angular/core';
import { MediaRecord } from '../models/media-record';
import { SinglePost } from '../models/single-post';

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

      const uploadedData = await fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
        method: "POST",
        body: formData
      }).then(response => response.json());

      return uploadedData;
    } catch {
      console.log("There was an error!");
    }

  }

  deleteRecord(collection: string, recordId: number) {
    Backendless.Data.of(collection).remove({ objectId: `${recordId}` })
      .then(x => console.log(x))
      .catch(function (error) {
      });
  }

  saveRecord(data: MediaRecord) {
    Backendless.Data.of("posts").save(data);
  }

  userRecords(userId: string, collection: string) {
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`ownerId = '${userId}'`);

    return Backendless.Data.of(collection).find(queryBuilder);
  }

  getAllRecords(collection: string) {
    return Backendless.Data.of(collection).find();
  }

  getSingleRecord(objectId: string, collection: string) {
    return Backendless.Data.of(collection).findById(objectId);
  }
}
