import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './service/movies.service';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [ MoviesComponent, MovieComponent ],
  providers: [ MoviesService ]
})
export class MoviesModule { }
