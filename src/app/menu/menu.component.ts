import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { trigger, transition, style, stagger, animate, keyframes, query } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface MenuItem {
  url: string;
  name: string;
}

@Component({
  selector: 'tallang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('60ms', [
          animate('400ms cubic-bezier(0, 0, 0, 1)', keyframes([
            style({ opacity: 0, transform: 'translateY(-16px)', offset: 0}),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1}),
          ]))
        ]), { optional: true } )
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
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
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
