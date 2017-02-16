import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  title = 'Movies';
  subtitle = 'all home made';

  constructor() { }

  ngOnInit() {
  }

}
