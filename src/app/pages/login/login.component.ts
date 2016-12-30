import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  action: string = 'Sign in';
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

}
