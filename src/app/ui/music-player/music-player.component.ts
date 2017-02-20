import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnChanges {
  isPlaying = false;
  @Input() url: string = 'http://tallang.no/content/msc/Mads%20solo.ogg';
  player = new Audio();
  progress: any;

  constructor() {
    this.player.src = this.url;
    this.player.load();
    this.player.addEventListener('timeupdate', function(event) {
      console.log(event);
    });
  }

  ngOnChanges() {
    this.player.src = this.url;
  }

  togglePlay() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  goToBeginning() {
    if (!this.player.paused) {
      this.player.currentTime = 0;
    }
  }

  goToEnd() {
    console.log(this.player);
  }

}
