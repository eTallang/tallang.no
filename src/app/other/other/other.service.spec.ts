/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtherService } from './other.service';

describe('OtherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherService]
    });
  });

  it('should ...', inject([OtherService], (service: OtherService) => {
    expect(service).toBeTruthy();
  }));
});
