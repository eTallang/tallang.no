import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

declare var require: any;
let api500px = require('500px');

@Injectable()
export class PicturesService {
  private pictures = firebase.database().ref('pictures');

  constructor() {
    api500px = new api500px('WFgDfr2PahDkWdiWMIBzHUE9FjSFdELkNeYs3frC');
  }

  getPhotos(): firebase.Promise<any> {
    return this.pictures.once('value', function(snapshot) {
      return snapshot;
    });
  }
}
