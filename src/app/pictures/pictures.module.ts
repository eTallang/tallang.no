import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { PicturesRoutingModule } from './pictures-routing.module';
import { PicturesComponent } from './pictures.component';
import { ImageComponent } from './image/image.component';
import { PicturesService } from './pictures/pictures.service';

@NgModule({
  imports: [
    SharedModule,
    PicturesRoutingModule
  ],
  declarations: [
    PicturesComponent,
    ImageComponent
  ],
  providers: [ PicturesService ]
})
export class PicturesModule { }
