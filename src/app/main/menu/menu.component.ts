import { Component } from '@angular/core';

import { AuthService, ToastService } from '../../core';

export interface Tab {
  url: string;
  icon: string;
}

@Component({
  selector: 'tallang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isSignedIn: boolean;
  tabs: Tab[] = [
    {
      url: '',
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

  constructor(public authService: AuthService, private toastService: ToastService) { }

  signOut() {
    this.authService.logout()
    .then(result => {
      this.toastService.showMessage('Signed out succesfully!');
    }).catch(error => {
      this.toastService.showMessage('Woops! Try signing out again.');
    });
  }
}
