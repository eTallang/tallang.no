import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  isMobile = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
