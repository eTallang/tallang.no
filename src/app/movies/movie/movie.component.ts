import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'tallang-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Output() watch = new EventEmitter<Movie>();
  hasMouseHover = false;
}
