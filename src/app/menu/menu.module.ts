import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule, A11yModule],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
