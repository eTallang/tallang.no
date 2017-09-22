import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { OtherRoutingModule } from './other-routing.module';
import { OtherService } from './other/other.service';
import { OtherComponent } from './other.component';

@NgModule({
  imports: [
    SharedModule,
    OtherRoutingModule
  ],
  declarations: [ OtherComponent ],
  providers: [ OtherService ]
})
export class OtherModule { }
