import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies/movies.service';

@NgModule({
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [ MoviesComponent ],
  providers: [ MoviesService ]
})
export class MoviesModule { }
