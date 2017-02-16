/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Store, StoreHelper } from '../../services';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuKdJ5hsSN98XrByybfc5zqxnLoHaFwGY',
  authDomain: 'tallang-267a8.firebaseapp.com',
  databaseURL: 'https://tallang-267a8.firebaseio.com',
  storageBucket: 'tallang-267a8.appspot.com',
  messagingSenderId: '412607846143'
};
firebase.initializeApp(firebaseConfig);

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        Store,
        StoreHelper]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
