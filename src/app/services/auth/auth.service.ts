import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  storeJwt(jwt: any) {
    localStorage.setItem('id_token', jwt);
  }

  isLoggedIn() {

  }

  logout() {

  }

}
