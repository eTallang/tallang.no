import { Observable } from 'rxjs/Observable';

export class MoviesServiceMock {
  getYoutubeVideos(): Observable<any> {
    return Observable.of([]);
  }
}
