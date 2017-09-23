import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ObservableMedia } from '@angular/flex-layout';

import { PhotosService } from './service/photos.service';
import { PhotoContainerService } from '../photo/service/photo-container.service';
import { PhotoComponent, ChangePhotoEvent } from '../photo/photo.component';
import { Photo } from './photo';

@Component({
  selector: 'tallang-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
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
export class PhotosComponent implements OnInit {
  columns = 4;
  photos: Photo[] = [];
  largePhoto: PhotoComponent;

  constructor(private photoService: PhotosService, private media: ObservableMedia, private photoContainerService: PhotoContainerService) { }

  ngOnInit() {
    this.photoService.getPhotos()
    .subscribe(photos => this.photos = photos);

    this.media.asObservable().subscribe(screenChange => {
      switch (screenChange.mqAlias) {
        case('xs'): this.columns = 1; break;
        case('sm'): this.columns = 2; break;
        case('md'): this.columns = 3; break;
        default: this.columns = 4; break;
      }
    });
  }

  openPhoto(selectedPhoto: Photo) {
    this.largePhoto = this.photoContainerService.openDialog(selectedPhoto);
    this.largePhoto.onChange.subscribe((change: ChangePhotoEvent) => {
      const index = this.photos.map(photo => photo.id).indexOf(change.photo_id);
      if (change.direction === 'next' && this.photos.length > index + 1) {
        this.photoContainerService.updatePhoto(this.photos[index + 1]);
      } else if (change.direction === 'previous' && index !== 0) {
        this.photoContainerService.updatePhoto(this.photos[index - 1]);
      }
    });
  }
}
