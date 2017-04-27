import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';

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

export const firebaseConfig = {
  apiKey: 'AIzaSyAuKdJ5hsSN98XrByybfc5zqxnLoHaFwGY',
  authDomain: 'tallang-267a8.firebaseapp.com',
  databaseURL: 'https://tallang-267a8.firebaseio.com',
  storageBucket: 'tallang-267a8.appspot.com',
  messagingSenderId: '412607846143'
};
firebase.initializeApp(firebaseConfig);

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
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
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
