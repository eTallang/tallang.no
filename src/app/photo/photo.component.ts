import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate, query } from '@angular/animations';
import { MdDialogRef } from '@angular/material';

import { Photo } from '../photos/photo';

@Component({
  selector: 'tallang-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':self', style({ opacity: 0, transform: 'translateY(-20px)' }), { optional: true }),
        query(':self',
          animate('400ms cubic-bezier(0,.59,.39,1)', style({opacity: 1, transform: 'translateY(0)'})), { optional: true })
      ])
    ])
  ]
})
export class PhotoComponent implements OnInit {
  photo: Photo;
  showControls = false;

  constructor(public dialogRef: MdDialogRef<PhotoComponent>) { }

  ngOnInit() {
    this.dialogRef.afterOpen().subscribe(afterOpen => this.showControls = true);
  }
}
