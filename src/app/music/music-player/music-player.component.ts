import { Component, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'tallang-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnChanges, OnDestroy {
  isPlaying = false;
  @Input() url = '';
  player = new Audio();
  progress: any;

  constructor() {
    this.player.src = this.url;
    this.player.load();
    this.player.addEventListener('timeupdate', function(event) {
    });
  }

  ngOnChanges() {
    this.player.src = this.url;
  }

  ngOnDestroy() {
    this.player.pause();
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
