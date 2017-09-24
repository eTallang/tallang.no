import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MoviesService } from './service/movies.service';
import { trigger, style, transition, animate, query, keyframes, stagger } from '@angular/animations';
import { Movie } from './movie';

@Component({
  selector: 'tallang-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('220ms', [
          animate('1400ms cubic-bezier(0,.59,.39,1)', keyframes([
            style({ opacity: 0, transform: 'translateY(-40px)', offset: 0}),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1}),
          ]))
        ]), { optional: true } )
      ])
    ])
  ]
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
    const fullUrl = `${this.youtubeUrlRoot}${movie.resourceId.videoId}`;
    movie.url = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
}
