import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  playlistId = 'playlistId=PL07MHRVZW5f4sH3NLOurpd5F7uOv73Lev';
  key = 'key=AIzaSyAXBOXg5RmypyzLvZiymF2IK2KovQ9b2Sw';
  url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&${this.playlistId}&${this.key}`;

  constructor(private http: HttpClient) { }

  getYoutubeVideos() {
    return this.http.get(this.url).pipe(map((result: any) => result.items.map(item => item.snippet)));
  }
}
