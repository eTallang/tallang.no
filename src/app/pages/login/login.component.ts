import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  action: string = 'Sign in';
  toggleActionText: string = 'Not registered?';
  user = {
    name: '',
    password: ''
  };

  authenticate() {
    console.log('Username: ' + this.user.name);
    console.log('Password: ' + this.user.password);
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
