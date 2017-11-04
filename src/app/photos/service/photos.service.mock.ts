import { Observable } from 'rxjs/Observable';

export class PhotosServiceMock {
  getPhotos() {
    return Observable.of({});
  }
}
