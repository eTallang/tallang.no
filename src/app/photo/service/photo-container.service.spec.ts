import { TestBed, inject } from '@angular/core/testing';

import { PhotoContainerService } from './photo-container.service';

describe('PhotoContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoContainerService]
    });
  });

  it('should be created', inject([PhotoContainerService], (service: PhotoContainerService) => {
    expect(service).toBeTruthy();
  }));
});
