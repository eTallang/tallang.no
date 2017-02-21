import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, Store, ToastService } from '../../services';

export interface Tab {
  url: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isSignedIn: boolean;
  tabs: Tab[] = [
    {
      url: 'pictures',
      icon: 'icon-camera'
    },
    {
      url: 'music',
      icon: 'icon-music-tone'
    },
    {
      url: 'movies',
      icon: 'icon-film'
    },
    {
      url: 'other',
      icon: 'icon-folder'
    }
  ];

  constructor(
    public authService: AuthService,
    private store: Store,
    public router: Router,
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
