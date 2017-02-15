import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  title = 'Pictures';
  subtitle = 'in a slideshow';

  constructor() { }

  ngOnInit() {
  }

}
