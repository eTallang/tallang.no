/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastService } from './toast.service';

import { MdSnackBar } from '@angular/material';

class StubService {}

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: MdSnackBar, useClass: StubService } ]
    });
  });

  it('should ...', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
