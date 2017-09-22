import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicService } from './music/music.service';


@NgModule({
  imports: [
    SharedModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicComponent,
    MusicPlayerComponent
  ],
  providers: [ MusicService ]
})
export class MusicModule { }
