import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  action = 'Sign in';
  toggleActionText = 'Not registered?';
  user = {
    name: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  authenticate() {
    if (this.action === 'Sign up') {
      this.signUp();
    } else {
      this.signIn();
    }
  }

  toggleAction() {
    if (this.action === 'Sign in') {
      this.action = 'Sign up';
      this.toggleActionText = 'Already registered?';
    } else {
      this.action = 'Sign in';
      this.toggleActionText = 'Not registered';
    }
  }

  signIn() {

  }

  signUp() {

  }
}
