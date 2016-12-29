import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  title: string = 'Music';
  subtitle: string = 'of different sorts';

  constructor() { }

  ngOnInit() {
  }

}
