import { Observable } from 'rxjs/Observable';

export class AuthServiceMock {

  signup(email: string, password: string) {
    return Observable.of({});
  }

  login(username: string, password: string) {
    return Observable.of({});
  }

  logout() {
    return Observable.of({});
  }

  sendEmailVerification() {
    return Observable.of({});
  }
}
