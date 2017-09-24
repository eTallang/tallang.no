import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { PhotoComponent } from './photo.component';
import { PhotoContainerService } from './service/photo-container.service';
import { PhotoInfoComponent } from './photo-info/photo-info.component';

@NgModule({
  imports: [ CommonModule, MdDialogModule, MdButtonModule ],
  declarations: [ PhotoComponent, PhotoInfoComponent ],
  providers: [ PhotoContainerService ],
  entryComponents: [ PhotoComponent ]
})
export class PhotoModule { }
