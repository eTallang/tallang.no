import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private angularFire: AngularFire) { }

  signIn(username: string, password: string) {
    this.angularFire.auth.login({
      email: username,
      password: password
    });
  }

  signUp(username: string, password: string) {
    this.angularFire.auth.createUser({
      email: username,
      password: password
    });
  }
}
