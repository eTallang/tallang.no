import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MoviesService } from '../../services';
import { Movie } from '../../interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  youtubeUrlRoot = 'https://www.youtube.com/embed/';

  constructor(private moviesService: MoviesService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.moviesService.getYoutubeVideos()
    .subscribe((result: Movie[]) => {
      result.map(movie => this.sanitize(movie));
      this.movies = result;
    });
  }

  sanitize(movie: Movie) {
    const fullUrl = this.youtubeUrlRoot + movie.resourceId.videoId;
    movie.url = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
}
