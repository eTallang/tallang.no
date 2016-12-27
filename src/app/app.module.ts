import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuComponent } from './ui';
import { AppComponent, PicturesComponent, MusicComponent, MoviesComponent, OtherComponent } from './pages';
import { routes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    MusicComponent,
    MoviesComponent,
    OtherComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
