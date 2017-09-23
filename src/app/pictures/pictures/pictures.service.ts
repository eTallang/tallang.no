import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Photo } from '../photo';

@Injectable()
export class PicturesService {
  path = 'https://api.500px.com/v1/photos';
  feature = 'user';
  username = 'etallang';
  key = 'WFgDfr2PahDkWdiWMIBzHUE9FjSFdELkNeYs3frC';
  constructor(private http: Http) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get(`${this.path}?feature=${this.feature}&username=${this.username}&image_size=600,5&consumer_key=${this.key}`)
    .map(res => res.json().photos);
  }
}
