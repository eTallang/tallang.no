import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getYoutubeVideos()
    .subscribe(result => console.log(result));
  }

}
