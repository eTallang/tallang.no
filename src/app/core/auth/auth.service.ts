import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  isSignedIn = false;

  constructor() {
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
      this.isSignedIn = !!user;
    });
  }
}
