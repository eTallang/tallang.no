import { Component } from '@angular/core';

@Component({
  selector: 'tallang-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  title = 'Music';
  subtitle = 'of different sorts';
  tracks: string[] = ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'];
}
