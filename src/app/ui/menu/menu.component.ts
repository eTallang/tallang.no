import { Component, OnInit } from '@angular/core';

import { AuthService, Store, ToastService } from '../../services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isSignedIn;

  constructor(
    public authService: AuthService,
    private store: Store,
    private toastService: ToastService) { }

  ngOnInit() {
    this.store.changes.map(data => data.isLoggedIn)
    .subscribe(result => this.isSignedIn = result);
  }

  signOut() {
    this.authService.logout()
    .then(result => {
      this.toastService.showMessage('Signed out succesfully!');
    }).catch(error => {
      this.toastService.showMessage('Woops! Try signing out again.');
    });
  }
}
