import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { PhotoComponent } from '../photo.component';
import { Photo } from '../../photos/photo';

@Injectable()
export class PhotoContainerService {
  constructor(private dialog: MdDialog) { }

  openDialog(photo: Photo) {
    let dialogRef: MdDialogRef<PhotoComponent>;

    dialogRef = this.dialog.open(PhotoComponent, {
      disableClose: true
    });
    dialogRef.componentInstance.photo = photo;

    return dialogRef.afterClosed();
  }
}
