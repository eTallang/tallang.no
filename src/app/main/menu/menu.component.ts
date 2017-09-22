import { Component } from '@angular/core';

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
    }
  ];
}
