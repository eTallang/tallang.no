import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class PicturesService {
  private pictures = firebase.database().ref('pictures');

  constructor() { }

  getPhotos(): firebase.Promise<any> {
    return this.pictures.once('value', function(snapshot) {
      return snapshot;
    });
  }
}
