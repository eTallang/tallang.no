import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

interface Photo {
  id: number;
  aperture: string;
  camera: string;
  created_at: Date;
  description: string;
  focal_length: string;
  height: number;
  image_format: string;
  image_url: string;
  images: [
    {
      format: string;
      https_url: string;
      size: number;
      url: string;
    }
  ];
  iso: string;
  latitude: number;
  longitude: number;
  lens: string;
  name: string;
  shutter_speed: string;
  taken_at: Date;
  url: string;
  width: number;
}

@Injectable()
export class PicturesService {
  path = 'https://api.500px.com/v1/photos';
  feature = 'user';
  username = 'etallang';
  key = 'WFgDfr2PahDkWdiWMIBzHUE9FjSFdELkNeYs3frC';
  constructor(private http: Http) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get(`${this.path}?feature=${this.feature}&username=${this.username}&image_size=440,5&consumer_key=${this.key}`)
    .map(res => res.json().photos);
  }
}
