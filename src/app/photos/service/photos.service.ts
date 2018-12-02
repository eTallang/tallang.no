import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Photo } from '../photo';

@Injectable()
export class PhotosService {
  path = 'https://api.500px.com/v1/photos';
  feature = 'user';
  username = 'etallang';
  key = 'WFgDfr2PahDkWdiWMIBzHUE9FjSFdELkNeYs3frC';
  constructor(private http: HttpClient) {}

  getPhotos() {
    const thumb_size = 440;
    const orig_size = 5;
    const sizeParams = `&image_size=${thumb_size},${orig_size}&consumer_key=${this.key}`;
    return this.http
    .get(`${this.path}?feature=${this.feature}&username=${this.username}${sizeParams}`)
    .pipe(map((res: any) => res.photos), map((photos: Photo[]) => photos.map((photo: Photo) => {
      photo.thumb_url = photo.images.find(i => i.size === thumb_size).url;
      photo.original_url = photo.images.find(i => i.size === orig_size).url;
      return photo;
    })));
  }
}
