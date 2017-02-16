import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Store } from '../store/store';
import { StoreHelper } from '../store/store-helper';

@Injectable()
export class AuthService {

  constructor(
    private storeHelper: StoreHelper,
    private store: Store) {
      this.observeUserState();
  }

  signup(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(username: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  }

  logout(): firebase.Promise<any> {
    return firebase.auth().signOut();
  }

  sendEmailVerification(): firebase.Promise<any> {
    return firebase.auth().currentUser.sendEmailVerification();
  }

  observeUserState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.storeHelper.update('isLoggedIn', true);
      } else {
        this.store.purge();
      }
    });
  }
}
