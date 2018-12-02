import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'tallang-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() url = 'https://tallang.no/old/content/music/Mads.mp3';
  isPlaying = false;
  player = new Audio();
  currentTime: number;
  duration: number;

  ngOnInit() {
    this.loadTrack();
  }

  ngOnChanges() {
    this.loadTrack();
  }

  ngOnDestroy() {
    this.player.pause();
  }

  loadTrack() {
    this.player.src = this.url;
    this.player.load();
    const that = this;
    console.log(this.player.duration);
  }

  togglePlay() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  goToBeginning() {
    this.player.currentTime = 0;
  }

  goToEnd() {
    this.player.currentTime = 0;
  }
}
