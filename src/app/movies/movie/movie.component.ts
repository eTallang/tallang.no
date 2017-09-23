import { Component, Input } from '@angular/core';

@Component({
  selector: 'tallang-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: any;
  @Input() rtl: boolean;
}
