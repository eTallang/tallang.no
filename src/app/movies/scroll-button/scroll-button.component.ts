import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tallang-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  @Input() direction: 'up' | 'down' = 'down';
  constructor() { }

  ngOnInit() {
  }

}
