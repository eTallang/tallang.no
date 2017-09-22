import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    MenuComponent
  ]
})
export class MainModule { }
