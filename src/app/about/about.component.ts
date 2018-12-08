import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'tallang-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isMobile = false;
  dashWidth = 200;
  @ViewChild('profileImage') imageElement: ElementRef<HTMLImageElement>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
    });

    fromEvent(this.imageElement.nativeElement, 'mousemove').pipe(throttleTime(20)).subscribe((event: MouseEvent) => {
      const img = this.imageElement.nativeElement;
      const xRatio = (event.clientX - img.offsetLeft) / img.clientWidth;
      const yRatio = (event.clientY - img.offsetTop) / img.clientHeight;
      this.dashWidth = 300 * ((xRatio + yRatio) / 2);
    });
  }
}
