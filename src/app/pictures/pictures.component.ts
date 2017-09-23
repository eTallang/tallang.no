import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { PicturesService } from './pictures/pictures.service';
import { Photo } from './photo';

@Component({
  selector: 'tallang-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  animations: [
    trigger('fadeUp', [
      state('1', style({
        display: 'block',
        opacity: '1'
      })),
      state('0', style({
        display: 'none',
        opacity: '0',
      })),
      transition('1 <=> 0', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
    trigger('scale', [
      state('1', style({
        transform: 'scale(1) translate(-50%, -50%)',
      })),
      state('0', style({
        transform: 'scale(0.5) translate(-50%, -50%)'
      })),
      transition('1 <=> 0', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class PicturesComponent implements OnInit {
  selectedPhoto: Photo;
  pictures: Photo[] = [];

  constructor(private picturesService: PicturesService) { }

  ngOnInit() {
    this.picturesService.getPhotos()
    .subscribe(pictures => this.pictures = pictures);
  }

  selectedPhotoClosed() {
    this.selectedPhoto = null;
  }

  setSelectedPhoto(selectedPhoto: Photo) {
    this.selectedPhoto = selectedPhoto;
  }
}
