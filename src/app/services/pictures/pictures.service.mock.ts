import { Observable } from 'rxjs/Observable';

export class PicturesServiceMock {
  getPhotos(): Promise<any> {
    return Observable.of('').toPromise();
  }
}
