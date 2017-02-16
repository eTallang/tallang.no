import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  title = 'Music';
  subtitle = 'of different sorts';

  constructor() { }

  ngOnInit() {
  }

}
