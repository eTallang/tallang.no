import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

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
    SharedModule,
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
