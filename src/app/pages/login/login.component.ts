import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  action: string = 'Sign in';
  toggleActionText: string = 'Not registered?';
  user = {
    name: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  authenticate() {
    console.log("Username: " + this.user.name);
    console.log("Password: " + this.user.password);
  }

  toggleAction() {
    if(this.action === 'Sign in') {
      this.action = 'Sign up';
      this.toggleActionText = 'Already registered?';
    } else {
      this.action = 'Sign in';
      this.toggleActionText = 'Not registered';
    }
  }

}
