import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuKdJ5hsSN98XrByybfc5zqxnLoHaFwGY',
  authDomain: 'tallang-267a8.firebaseapp.com',
  databaseURL: 'https://tallang-267a8.firebaseio.com',
  storageBucket: 'tallang-267a8.appspot.com',
  messagingSenderId: '412607846143'
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ]
})
export class CoreModule { }
