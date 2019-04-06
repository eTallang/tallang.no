import { Component, Input, ElementRef } from '@angular/core';

type Position = 'top' | 'right' | 'bottom' | 'left';

interface Sprite {
  size: number;
  position: Position;
  positionOffset: number;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[taSprites]',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.scss']
})
export class SpritesComponent {
  @Input() spriteColor: 'primary' | 'accent' = 'primary';

  @Input()
  set noOfSprites(noOfSprites: number) {
    noOfSprites = noOfSprites || 7;
    this.sprites = this.createSprites(noOfSprites);
  }

  sprites: Sprite[] = this.createSprites(7);

  get hostWidth(): number {
    if (!this.elementRef || !this.elementRef.nativeElement) {
      return 0;
    }
    return this.elementRef.nativeElement.clientWidth;
  }

  get hostHeight(): number {
    if (!this.elementRef || !this.elementRef.nativeElement) {
      return 0;
    }
    return this.elementRef.nativeElement.clientHeight;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  private createSprites(numberOfSprites: number): Sprite[] {
    const sprites: Sprite[] = [];
    for (let i = 0; i < numberOfSprites; i++) {
      const size = Math.random() * 14;
      const posRandomizer = Math.random();
      let position: Position;
      let positionOffset: number;
      if (posRandomizer < 0.25) {
        position = 'top';
        positionOffset = Math.random() * this.hostWidth;
      } else if (posRandomizer < 0.5) {
        position = 'right';
        positionOffset = Math.random() * this.hostHeight;
      } else if (posRandomizer < 0.75) {
        position = 'bottom';
        positionOffset = Math.random() * this.hostWidth;
      } else {
        position = 'left';
        positionOffset = Math.random() * this.hostHeight;
      }
      sprites.push({
        size, position, positionOffset
      });
    }

    return sprites;
  }
}
