import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoviesService {
  playlistId = 'playlistId=PL07MHRVZW5f4sH3NLOurpd5F7uOv73Lev';
  key = 'key=AIzaSyAXBOXg5RmypyzLvZiymF2IK2KovQ9b2Sw';
  url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&${this.playlistId}&${this.key}`;

  constructor(private http: Http) { }

  getYoutubeVideos() {
    return this.http.get(this.url).map(result => result.json().items.map(item => item.snippet));
  }
}
