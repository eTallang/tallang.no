import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { ImageComponent } from './image/image.component';
import { PhotosService } from './service/photos.service';

@NgModule({
  imports: [
    SharedModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotosComponent,
    ImageComponent
  ],
  providers: [ PhotosService ]
})
export class PhotosModule { }
