import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Movie } from '../movie';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) { }

  getYoutubeVideos(): Observable<Movie[]> {
    const playlistId = 'playlistId=PL07MHRVZW5f4sH3NLOurpd5F7uOv73Lev';
    const key = 'key=AIzaSyAXBOXg5RmypyzLvZiymF2IK2KovQ9b2Sw';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&${playlistId}&${key}`;
    return this.http.get<Movie[]>(url).pipe(map((result: any) => result.items.map(item => item.snippet)));
  }
}
