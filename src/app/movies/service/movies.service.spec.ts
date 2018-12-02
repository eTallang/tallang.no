import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
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
        { provide: HttpClient, useClass: HttpMock }
      ]
    });
  });

  it('should ...', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
