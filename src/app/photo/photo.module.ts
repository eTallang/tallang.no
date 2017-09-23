import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { PhotoComponent } from './photo.component';
import { PhotoContainerService } from './service/photo-container.service';

@NgModule({
  imports: [ CommonModule, MdDialogModule, MdButtonModule ],
  declarations: [ PhotoComponent ],
  providers: [ PhotoContainerService ],
  entryComponents: [ PhotoComponent ]
})
export class PhotoModule { }
