import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { PhotoComponent } from '../photo.component';
import { Photo } from '../../photos/photo';

@Injectable()
export class PhotoContainerService {
  dialogRef: MdDialogRef<PhotoComponent>;

  constructor(private dialog: MdDialog) { }

  openDialog(photo: Photo) {

    this.dialogRef = this.dialog.open(PhotoComponent, {
      disableClose: true
    });
    this.dialogRef.componentInstance.photo = photo;

    return this.dialogRef.componentInstance;
  }

  updatePhoto(photo: Photo) {
    this.dialogRef.componentInstance.photo = photo;
  }
}
