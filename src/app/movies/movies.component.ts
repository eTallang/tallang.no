import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { MoviesService } from './service/movies.service';
import { Movie } from './movie';
import { BreakpointService } from '../core';

@Component({
  selector: 'tallang-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @ViewChild('movieFrame') movieFrame: ElementRef<HTMLIFrameElement>;
  @ViewChild('moviesContainer') moviesContainer: ElementRef<HTMLElement>;
  movies: Movie[] = [];
  selectedMovie: Movie;
  isMobile: boolean;
  youtubeUrlRoot = 'https://www.youtube.com/embed/';
  showScrollButton = false;
  atTopOfPage = true;

  constructor(
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit() {
    this.breakpointService.isMobile.subscribe(result => {
      this.isMobile = result.matches;

      const host = document.body;
      this.showScrollButton = !this.isMobile && host.scrollHeight > host.clientHeight;
    });
    this.moviesService.getYoutubeVideos().subscribe(movies => {
      movies.forEach(movie => this.sanitize(movie));
      this.movies = movies;
      this.selectedMovie = movies[0];
    });

    fromEvent(document, 'scroll')
      .pipe(throttleTime(50))
      .subscribe((event: Event) => {
        this.atTopOfPage = window.scrollY < 100;
      });
  }

  sanitize(movie: Movie) {
    const fullUrl = `${this.youtubeUrlRoot}${movie.resourceId.videoId}`;
    movie.url = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }

  setSelectedMovie(selectedMovie: Movie): void {
    this.selectedMovie = selectedMovie;
    setTimeout(() => {
      this.movieFrame.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  scroll(): void {
    if (this.atTopOfPage) {
      this.moviesContainer.nativeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else {
      this.movieFrame.nativeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }
}
