import { Observable } from 'rxjs';

export class PhotosServiceMock {
  getPhotos() {
    return Observable.of({});
  }
}
