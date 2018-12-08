import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { LayoutModule } from '@angular/cdk/layout';

import { MenuComponent } from './menu.component';
import { ActiveIndicatorComponent } from './active-indicator/active-indicator.component';
import { MenuItemDirective } from './menu-item.directive';

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule, A11yModule, LayoutModule],
  declarations: [MenuComponent, ActiveIndicatorComponent, MenuItemDirective],
  exports: [MenuComponent]
})
export class MenuModule {}
