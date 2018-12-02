import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { PhotoComponent } from '../photo.component';
import { Photo } from '../../photos/photo';

@Injectable()
export class PhotoContainerService {
  dialogRef: MatDialogRef<PhotoComponent>;

  constructor(private dialog: MatDialog) { }

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
