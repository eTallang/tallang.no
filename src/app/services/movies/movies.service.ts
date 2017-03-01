import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoviesService {
  url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' +
  'PL07MHRVZW5f4sH3NLOurpd5F7uOv73Lev&key=AIzaSyAXBOXg5RmypyzLvZiymF2IK2KovQ9b2Sw';

  constructor(private http: Http) { }

  getYoutubeVideos() {
    return this.http.get(this.url).map(result => result.json());
  }
}
