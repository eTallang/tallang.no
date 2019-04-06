import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpritesComponent } from './sprites.component';

@NgModule({
  declarations: [SpritesComponent],
  imports: [
    CommonModule
  ],
  exports: [ SpritesComponent ]
})
export class SpritesModule { }
