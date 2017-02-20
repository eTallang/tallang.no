import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  title = 'Music';
  subtitle = 'of different sorts';
  tracks: string[] = ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'];

  constructor() { }

  ngOnInit() {
  }

}
