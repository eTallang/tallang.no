import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

import { Photo } from '../photos/photo';

const ESCAPE = 27;
const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;

export interface ChangePhotoEvent {
  direction: string;
  photo_id: number;
}

@Component({
  selector: 'tallang-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query('button',
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          { optional: true }
        ),
        query('button',
          stagger('100ms', [
            animate('1200ms 200ms cubic-bezier(0,.59,.39,1)',
              style({opacity: 1, transform: 'translateY(0)'})
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class PhotoComponent implements OnInit {
  photo: Photo;
  showControls = false;
  showInfobar = false;
  onChange = new EventEmitter<ChangePhotoEvent>();
  get verticalPhoto() {
    return this.photo.height > this.photo.width;
  }

  constructor(public dialogRef: MatDialogRef<PhotoComponent>) { }

  ngOnInit() {
    this.dialogRef.afterOpen().subscribe(() => this.showControls = true);
    this.listenForKeyEvents();
  }

  nextPhoto() {
    this.onChange.emit({
      direction: 'next',
      photo_id: this.photo.id
    });
  }

  previousPhoto() {
    this.onChange.emit({
      direction: 'previous',
      photo_id: this.photo.id
    });
  }

  toggleInfobar() {
    this.showInfobar = !this.showInfobar;
  }

  listenForKeyEvents() {
    Observable.fromEvent(window, 'keyup').subscribe((key: KeyboardEvent) => {
      console.log(key);
      if (key.keyCode === ARROW_LEFT) {
        this.previousPhoto();
      } else if (key.keyCode === ARROW_RIGHT) {
        this.nextPhoto();
      } else if (key.keyCode === ESCAPE) {
        this.dialogRef.close();
      }
    });
  }
}
