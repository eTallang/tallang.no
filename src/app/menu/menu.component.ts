import { Component, ViewEncapsulation } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';

export interface MenuItem {
  url: string;
  name: string;
}

@Component({
  selector: 'tallang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      url: 'about-me',
      name: 'About me'
    },
    {
      url: 'movies',
      name: 'Movies'
    },
    {
      url: 'blog',
      name: 'Blog'
    }
  ];

  isOpen = false;
}
