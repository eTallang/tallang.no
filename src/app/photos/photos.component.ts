import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';
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
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('700ms cubic-bezier(0,.59,.39,1)', keyframes([
            style({ opacity: 0, offset: 0}),
            style({ opacity: 1, offset: 1}),
          ]))
        ]), { optional: true } )
      ])
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
        case('xs'): this.columns = 2; break;
        case('sm'): this.columns = 3; break;
        case('md'): this.columns = 4; break;
        default: this.columns = 5; break;
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
