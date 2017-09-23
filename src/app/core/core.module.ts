import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import './rxjs-dependencies';

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
