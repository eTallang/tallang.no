import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'tallang-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [
    trigger('highlight', [
      state('1', style({
        filter: 'brightness(100%)',
        transform: 'scale(1.03)'
      })),
      state('0',   style({
        filter: 'brightness(70%)',
        transform: 'scale(1.0)'
      })),
      transition('1 <=> 0', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ImageComponent {
  @Input() url: string;
  @Output() clicked = new EventEmitter();
  isHovered = 0;

  imageClicked() {
    this.clicked.next(this.url);
  }
}
