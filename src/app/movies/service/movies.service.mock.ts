import { Observable, of } from 'rxjs';

export class MoviesServiceMock {
  getYoutubeVideos(): Observable<any> {
    return of([]);
  }
}
