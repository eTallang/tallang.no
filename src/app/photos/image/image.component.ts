import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'tallang-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [
    trigger('highlight', [
      state('on', style({
        filter: 'brightness(100%)',
        transform: 'scale(1.02)'
      })),
      state('off',   style({
        filter: 'brightness(80%)',
        transform: 'scale(1.0)'
      })),
      transition('on <=> off', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ImageComponent {
  @Input() url: string;
  @Output() clicked = new EventEmitter();
  mouseState = 'off';

  imageClicked() {
    this.clicked.next(this.url);
  }
}
