import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Photo } from '../photo';

@Injectable()
export class PhotosService {
  path = 'https://api.500px.com/v1/photos';
  feature = 'user';
  username = 'etallang';
  key = 'WFgDfr2PahDkWdiWMIBzHUE9FjSFdELkNeYs3frC';
  constructor(private http: Http) {}

  getPhotos(): Observable<Photo[]> {
    const thumb_size = 600;
    const orig_size = 5;
    return this.http
    .get(`${this.path}?feature=${this.feature}&username=${this.username}&image_size=${thumb_size},${orig_size}&consumer_key=${this.key}`)
    .map(res => res.json().photos)
    .map(photos => photos.map((photo: Photo) => {
      photo.thumb_url = photo.images.find(i => i.size === thumb_size).url;
      photo.original_url = photo.images.find(i => i.size === orig_size).url;
      return photo;
    }));
  }
}
