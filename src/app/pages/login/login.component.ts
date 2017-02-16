import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, ToastService } from '../../services';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService) { }

  authenticate() {
    if (this.action === 'Sign up') {
      this.signup();
    } else {
      this.signin();
    }
  }

  signup() {
    this.authService.signup(this.user.name, this.user.password)
    .then(result => {
      this.authService.sendEmailVerification();
      this.toastService.showMessage('Success! Check your inbox to verify your email.', 'Got it');
    }).catch(error => {
      this.toastService.showMessage(error.message);
    });
  }

  signin() {
    this.authService.login(this.user.name, this.user.password)
    .then(result => {
      this.toastService.showMessage('Signed in succesfully!');
      this.router.navigate(['']);
    }).catch(error => {
      this.toastService.showMessage(error.message);
    });
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
}
