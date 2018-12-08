import { Directive, ElementRef, Input } from '@angular/core';

import { MenuItem } from './menu.component';

@Directive({
  selector: '[tallangMenuItem]'
})
export class MenuItemDirective {
  @Input() value: MenuItem;

  get height(): number {
    return this.elementRef.nativeElement.clientHeight;
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  constructor(private elementRef: ElementRef<HTMLAnchorElement>) { }
}
