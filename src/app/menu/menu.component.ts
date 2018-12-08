import {
  Component,
  ViewEncapsulation,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  keyframes,
  query
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuItemDirective } from './menu-item.directive';
import { Router } from '@angular/router';

export interface MenuItem {
  url: string;
  name: string;
}

const iconAnimation = '250ms cubic-bezier(.3, 0, 0, 1)';
const rotateAmount = '240deg';

@Component({
  selector: 'tallang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('60ms', [
            animate(
              '400ms 100ms cubic-bezier(0, 0, 0, 1)',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-16px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ]),
    trigger('icon', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: `rotate(-${rotateAmount})`
        }),
        animate(
          iconAnimation,
          style({
            opacity: 1,
            transform: 'rotate(0)'
          })
        )
      ]),
      transition('* => void', [
        style({
          opacity: 1,
          transform: 'rotate(0deg)'
        }),
        animate(
          iconAnimation,
          style({
            opacity: 0,
            transform: `rotate(${rotateAmount})`
          })
        )
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  @ViewChildren(MenuItemDirective) subMenuItems: QueryList<MenuItemDirective>;
  hoveredItem: MenuItemDirective;
  selectedItem: MenuItemDirective;
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.isOpen = true;
      this.changeDetectorRef.detectChanges();
      this.menuItems.forEach(menuItem => {
        if (this.router.isActive(menuItem.url, false)) {
          this.selectedItem = this.getMenuDirective(menuItem);
        }
      });
    }
  }

  closeMenu() {
    this.isOpen = false;
    this.selectedItem = null;
    this.hoveredItem = null;
  }

  getMenuDirective(subMenuItem: MenuItem): MenuItemDirective {
    return this.subMenuItems.find(i => i.value === subMenuItem);
  }
}
