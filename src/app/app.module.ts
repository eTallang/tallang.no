import { MdButtonModule, MdSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';


import {
  MenuComponent,
  ImageComponent,
  MusicPlayerComponent } from './ui';
import {
    AppComponent,
    PicturesComponent,
    MusicComponent,
    MoviesComponent,
    OtherComponent,
    LoginComponent } from './pages';
import { routes } from './routes/routes';
import {
  AuthService,
  MoviesService,
  MusicService,
  OtherService,
  PicturesService,
  Store,
  StoreHelper,
  ToastService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    MusicComponent,
    MoviesComponent,
    OtherComponent,
    LoginComponent,
    MenuComponent,
    ImageComponent,
    MusicPlayerComponent
  ],
  imports: [
    CoreModule,
    MdButtonModule,
    MdSnackBarModule,
    FlexLayoutModule,
    FormsModule,
    routes
  ],
  providers: [
    AuthService,
    MoviesService,
    MusicService,
    OtherService,
    PicturesService,
    Store,
    StoreHelper,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
