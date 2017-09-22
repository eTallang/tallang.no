import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';
import './rxjs-dependencies';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuKdJ5hsSN98XrByybfc5zqxnLoHaFwGY',
  authDomain: 'tallang-267a8.firebaseapp.com',
  databaseURL: 'https://tallang-267a8.firebaseio.com',
  storageBucket: 'tallang-267a8.appspot.com',
  messagingSenderId: '412607846143'
};
firebase.initializeApp(firebaseConfig);

import { AuthService, ToastService } from './';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    ToastService
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ]
})
export class CoreModule { }
