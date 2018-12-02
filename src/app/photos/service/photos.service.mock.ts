import { of } from 'rxjs';

export class PhotosServiceMock {
  getPhotos() {
    return of({});
  }
}
