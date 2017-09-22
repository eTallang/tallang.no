import { Observable } from 'rxjs/Observable';

export class PicturesServiceMock {
  getPhotos() {
    return Observable.of({});
  }
}
