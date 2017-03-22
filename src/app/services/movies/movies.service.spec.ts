import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { MoviesService } from './movies.service';

class HttpMock {
  get(url?: string) {
    return [];
  }
}
describe('MoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:
      [
        MoviesService,
        { provide: Http, useClass: HttpMock }
      ]
    });
  });

  it('should ...', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
