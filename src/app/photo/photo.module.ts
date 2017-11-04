import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { PhotoComponent } from './photo.component';
import { PhotoContainerService } from './service/photo-container.service';
import { PhotoInfoComponent } from './photo-info/photo-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    PhotoComponent,
    PhotoInfoComponent
  ],
  providers: [ PhotoContainerService ],
  entryComponents: [ PhotoComponent ]
})
export class PhotoModule { }
